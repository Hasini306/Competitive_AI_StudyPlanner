const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  examType: { type: String, required: true }, // e.g. JEE, NEET, UPSC
  subject: { type: String, required: true },   // e.g. Mathematics, Physics
  title: { type: String, required: true },    // e.g. "Calculus Important Notes"
  type: { type: String, enum: ['pdf', 'pyq', 'video', 'notes'], required: true },
  url: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Material', materialSchema);
