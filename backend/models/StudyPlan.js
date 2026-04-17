const mongoose = require('mongoose');

const taskItemSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  topic: { type: String, required: true },
  taskType: { type: String, required: true }, // e.g., study, mocktest
  title: { type: String, required: true },
  description: { type: String, default: '' },
  completed: { type: Boolean, default: false },
  unlocked: { type: Boolean, default: false },
  status: { type: String, default: 'locked' },
  score: { type: Number, default: null } // if it's a test
});

const planDaySchema = new mongoose.Schema({
  dayNumber: { type: Number, required: true },
  date: { type: Date, required: true },
  isUnlocked: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  tasks: [taskItemSchema]
});

const studyPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  examType: { type: String, required: true },
  subject: { type: String }, // optional overall subject context
  topics: [{ type: String }],
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalDays: { type: Number, required: true },
  planDays: [planDaySchema]
}, { timestamps: true });

module.exports = mongoose.model('StudyPlan', studyPlanSchema);
