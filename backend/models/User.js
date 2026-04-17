const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'mentor'], default: 'student' },
  mentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  
  // Profile Extended Fields
  profileImage: { type: String, default: '' },
  targetExam: { type: String, default: '' },
  targetDate: { type: Date, default: null },
  targetScore: { type: Number, default: null },
  preferredStudyTime: { type: String, enum: ['morning', 'afternoon', 'evening', 'night', ''], default: '' },
  dailyTargetHours: { type: Number, default: null },
  focusSubject: { type: String, default: '' },
  // Contact Details
  phoneNumber: { type: String, default: '' },
  alternatePhoneNumber: { type: String, default: '' },
  city: { type: String, default: '' },
  state: { type: String, default: '' },
  country: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
