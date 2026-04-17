const mongoose = require('mongoose');

const testAttemptSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
  plan: { type: mongoose.Schema.Types.ObjectId, ref: 'StudyPlan', required: true },
  examType: { type: String, required: true },
  subject: { type: String, required: true },
  topic: { type: String, required: true },
  testType: { type: String, enum: ['task', 'mock'], required: true },
  questions: [{
    questionText: String,
    options: [String],
    correctOption: Number // index
  }],
  selectedAnswers: [Number], // indices
  score: { type: Number, required: true },
  passed: { type: Boolean, required: true }
}, { timestamps: true });

module.exports = mongoose.model('TestAttempt', testAttemptSchema);
