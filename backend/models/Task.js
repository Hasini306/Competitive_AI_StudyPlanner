const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plan: { type: mongoose.Schema.Types.ObjectId, ref: 'StudyPlan', required: true },
  examType: { type: String, required: true },
  subject: { type: String, required: true },
  topic: { type: String, required: true },
  date: { type: Date, required: true },      // The target study date
  dayNumber: { type: Number, required: true }, // E.g., Day 1, Day 2
  
  // States: 'locked', 'pending' (unlocked but not done), 'completed'
  // When system date >= this.date, it becomes 'pending'
  status: { type: String, enum: ['locked', 'pending', 'completed'], default: 'locked' },
  
  taskTestScore: { type: Number, default: null }, // Out of 10
  taskTestPassed: { type: Boolean, default: false },
  reattempts: { type: Number, default: 0 },
  
  mockTestScore: { type: Number, default: null }, // Out of 10
  mockTestPassed: { type: Boolean, default: false } // Only passed MockTest marks Task 'completed'
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
