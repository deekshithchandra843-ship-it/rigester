require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const Registration = require('./models/Registration');
const dashboardRoutes = require('./routes/dashboard');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Serve the analytics dashboard at /dashboard
app.use('/dashboard', express.static(path.join(__dirname, 'public/dashboard')));

// Deploy probe: unambiguous marker so we can tell which build is actually live
const BUILD_TAG = 'dashboard-v1';
app.get('/healthz', (req, res) => res.json({ ok: true, build: BUILD_TAG }));

// Dashboard analytics API (aggregation pipelines): /api/dashboard, /api/registrations, /api/filters
app.use('/api', dashboardRoutes);

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// --- File storage: Cloudinary (permanent) when configured, else local disk ---
// Configure Cloudinary from environment variables.
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const cloudinaryEnabled = !!(
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
);
console.log(`File storage: ${cloudinaryEnabled ? 'Cloudinary (permanent)' : 'local disk (ephemeral)'}`);

// Keep uploads in memory so we can forward them to Cloudinary (or write to disk).
const upload = multer({ storage: multer.memoryStorage() });

/**
 * Persist one uploaded file and return a URL/path to store in the DB.
 * Uploads to Cloudinary when configured; otherwise writes to the local
 * uploads/ folder (note: local disk is wiped on Render restarts).
 */
function storeFile(file) {
  if (!file) return Promise.resolve(null);

  if (cloudinaryEnabled) {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'registrations', resource_type: 'auto' },
        (err, result) => (err ? reject(err) : resolve(result.secure_url))
      );
      stream.end(file.buffer);
    });
  }

  // Fallback: write to local disk
  const filename = `${Date.now()}-${file.originalname}`;
  fs.writeFileSync(path.join(__dirname, 'uploads', filename), file.buffer);
  return Promise.resolve(`/uploads/${filename}`);
}

// API Endpoints

// POST /api/register
app.post('/api/register', upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'resume', maxCount: 1 },
  { name: 'aadhaar', maxCount: 1 },
  { name: 'other', maxCount: 1 }
]), async (req, res) => {
  try {
    const { body, files } = req;
    
    // Parse arrays
    let languages = [];
    let interests = [];
    try {
      if (body.languages) languages = JSON.parse(body.languages);
      if (body.interests) interests = JSON.parse(body.interests);
    } catch (e) {
      languages = Array.isArray(body.languages) ? body.languages : [];
      interests = Array.isArray(body.interests) ? body.interests : [];
    }

    // Persist each uploaded file (Cloudinary or disk) and store its URL/path.
    const [photo_path, resume_path, aadhaar_path, other_doc_path] = await Promise.all([
      storeFile(files['photo'] && files['photo'][0]),
      storeFile(files['resume'] && files['resume'][0]),
      storeFile(files['aadhaar'] && files['aadhaar'][0]),
      storeFile(files['other'] && files['other'][0]),
    ]);

    const registrationData = {
      ...body,
      languages,
      interests,
      photo_path,
      resume_path,
      aadhaar_path,
      other_doc_path,
    };

    const newRegistration = new Registration(registrationData);
    await newRegistration.save();

    res.status(201).json({ 
      success: true, 
      registration_id: registrationData.registration_id 
    });
  } catch (error) {
    console.error('SERVER ERROR:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} [build: ${BUILD_TAG}]`));
