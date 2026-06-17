require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
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

// Dashboard analytics API (aggregation pipelines): /api/dashboard, /api/registrations, /api/filters
app.use('/api', dashboardRoutes);

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Configure Local Disk Storage for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

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

    const registrationData = {
      ...body,
      languages,
      interests,
      photo_path: files['photo'] ? `/uploads/${files['photo'][0].filename}` : null,
      resume_path: files['resume'] ? `/uploads/${files['resume'][0].filename}` : null,
      aadhaar_path: files['aadhaar'] ? `/uploads/${files['aadhaar'][0].filename}` : null,
      other_doc_path: files['other'] ? `/uploads/${files['other'][0].filename}` : null,
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
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
