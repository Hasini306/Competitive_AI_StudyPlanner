const { generateDynamicQuestions } = require('../utils/aiGenerator');

// @desc    Generate test questions
// @route   GET /api/test/generate
// @access  Private
exports.generateTest = async (req, res) => {
  try {
    const { topic, type, examType, subject } = req.query;

    if (!topic || !type) {
      return res.status(400).json({ message: 'Topic and test type are required' });
    }

    // Now uses dynamic generation so it never fails!
    const data = generateDynamicQuestions(examType || "General Exam", subject || "General Subject", topic, type);

    res.json(data);
  } catch (error) {
    if (error.message === 'No topic-based questions found for this topic') {
      return res.status(404).json({ message: error.message });
    }
    console.error("Generate test error:", error);
    res.status(500).json({ message: 'Server Error while generating test' });
  }
};
