const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  registration_id: { type: String, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  address: String,
  district: { type: String, required: true },
  taluk: { type: String },
  gram_panchayat: { type: String },
  pincode: String,
  occupation: { type: String, required: true },
  experience: { type: String, required: true },
  education: String,
  languages: [String],
  interests: [String],
  prev_organizations: String,
  about: String,
  photo_path: String,
  resume_path: String,
  aadhaar_path: String,
  other_doc_path: String,
  status: { type: String, default: 'pending' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', RegistrationSchema);
