/**
 * Seed script — inserts realistic sample registrations so the dashboard
 * has data to visualize. Run with:  node seed.js   (or: npm run seed)
 *
 * Safe to re-run: it only ever touches records whose registration_id
 * starts with "SEED-". It deletes previous seed records first, then
 * re-inserts a fresh batch. Your real registrations are never touched.
 */
require('dotenv').config();
const mongoose = require('mongoose');
const Registration = require('./models/Registration');

const COUNT = 150;
const SEED_PREFIX = 'SEED-';

const districts = ['Ballari', 'Bengaluru Urban', 'Mysuru', 'Belagavi', 'Kalaburagi', 'Dharwad', 'Tumakuru', 'Shivamogga'];
const taluks = ['North', 'South', 'East', 'West', 'Central'];
const genders = ['Male', 'Female', 'Other'];
const occupations = ['Working journalist', 'Farmer', 'Teacher', 'Student', 'Social worker', 'Engineer', 'Self-employed', 'Healthcare worker'];
const experiences = ['0-2 years', '3-5 years', '6-10 years', '10+ years'];
const educations = ['SSLC', 'PUC', 'Graduate', 'Post-graduate', 'Diploma'];
const statuses = ['pending', 'approved', 'approved', 'rejected']; // weighted toward approved
const languages = ['Kannada', 'English', 'Hindi', 'Telugu', 'Tamil'];
const interests = ['Reporting', 'Photography', 'Editing', 'Community work', 'Research'];

// pick a random element
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
// pick 1–3 random unique elements
const pickSome = (arr) => {
  const n = 1 + Math.floor(Math.random() * 3);
  return [...arr].sort(() => 0.5 - Math.random()).slice(0, n);
};

// random date within the last ~6 months
function randomDate() {
  const now = Date.now();
  const sixMonths = 1000 * 60 * 60 * 24 * 180;
  return new Date(now - Math.random() * sixMonths);
}

function makeRecord(i) {
  const created = randomDate();
  return {
    registration_id: `${SEED_PREFIX}${String(i).padStart(4, '0')}`,
    first_name: `Test${i}`,
    last_name: `User${i}`,
    mobile: `9${Math.floor(100000000 + Math.random() * 899999999)}`,
    email: `seed${i}@example.com`,
    dob: new Date(1970 + Math.floor(Math.random() * 35), Math.floor(Math.random() * 12), 1 + Math.floor(Math.random() * 28)),
    gender: pick(genders),
    address: `${i} Sample Street`,
    district: pick(districts),
    taluk: pick(taluks),
    gram_panchayat: `GP-${pick(taluks)}-${1 + Math.floor(Math.random() * 20)}`,
    pincode: String(560000 + Math.floor(Math.random() * 9999)),
    occupation: pick(occupations),
    experience: pick(experiences),
    education: pick(educations),
    languages: pickSome(languages),
    interests: pickSome(interests),
    status: pick(statuses),
    created_at: created,
  };
}

async function run() {
  const mongoURI = process.env.MONGO_URI;
  if (!mongoURI) {
    console.error('MONGO_URI not set in .env');
    process.exit(1);
  }

  await mongoose.connect(mongoURI);
  console.log('MongoDB Connected');

  // Remove any previous seed data so re-running stays idempotent.
  const del = await Registration.deleteMany({ registration_id: { $regex: `^${SEED_PREFIX}` } });
  console.log(`Removed ${del.deletedCount} previous seed records.`);

  const records = Array.from({ length: COUNT }, (_, i) => makeRecord(i + 1));
  await Registration.insertMany(records);
  console.log(`Inserted ${records.length} seed records.`);

  await mongoose.disconnect();
  console.log('Done. Open http://localhost:3000/dashboard/dashboard.html');
}

run().catch((err) => {
  console.error('SEED ERROR:', err);
  process.exit(1);
});
