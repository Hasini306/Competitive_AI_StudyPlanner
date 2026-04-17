const express = require('express');
const { protect } = require('../middlewares/auth');
const Task = require('../models/Task');
const TestAttempt = require('../models/TestAttempt');

const router = express.Router();

const stripTime = (dateStr) => {
  const d = new Date(dateStr);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};

// @route   GET /api/tasks/all
// @desc    Get all tasks with Day-wise sequential unlocking logic
router.get('/all', protect, async (req, res) => {
  try {
    const today = stripTime(new Date()).getTime();
    
    // Fetch all for the user
    let tasks = await Task.find({ student: req.user._id }).populate('plan').sort({ dayNumber: 1, date: 1 });

    let hasIncompletePrevious = false;

    let tasksToSend = tasks.map(t => {
      const taskDate = stripTime(t.date).getTime();
      const isPastOrToday = taskDate <= today;
      const isCompleted = t.status === 'completed'; // Assumes mockTestPassed = completed
      const isTaskTestPassed = t.taskTestPassed;

      let derivedStatus = 'locked';

      if (isCompleted) {
        derivedStatus = 'completed';
      } else if (isPastOrToday && !hasIncompletePrevious) {
        derivedStatus = 'pending'; // Unlocked!
      } else {
        derivedStatus = 'locked';
      }

      // If we encounter any task that is NOT completed, all subsequent tasks MUST be locked
      if (!isCompleted) {
        hasIncompletePrevious = true;
      }

      const isMissed = derivedStatus === 'pending' && taskDate < today;

      return {
        ...t._doc,
        derivedStatus,
        isUnlocked: derivedStatus === 'pending',
        isMissed
      };
    });

    res.json(tasksToSend);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/tasks/materials
// @route   GET /api/tasks/materials/:topic
router.get('/materials/:topic', protect, async (req, res) => {
  try {
     const { generateDynamicMaterials } = require('../utils/aiGenerator');
     const { topic } = req.params;
     const examType = req.query.examType || "General Exam";
     const subject = req.query.subject || "General Subject";

     const data = generateDynamicMaterials(examType, subject, topic);
     return res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/tasks/test/generate/:id/:type
router.get('/test/generate/:id/:type', protect, async (req, res) => {
  try {
    const { type } = req.params;
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    
    const { generateDynamicQuestions } = require('../utils/aiGenerator');
    const data = generateDynamicQuestions(task.examType || "General Exam", task.subject || "General Subject", task.topic, type);

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /api/tasks/:id/submit-test/:type
router.post('/:id/submit-test/:type', protect, async (req, res) => {
  try {
    const { type } = req.params;
    const { questions, selectedAnswers } = req.body;
    const task = await Task.findById(req.params.id).populate('plan');

    if (!task) return res.status(404).json({ message: 'Task not found' });

    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] !== undefined && selectedAnswers[idx] !== null && selectedAnswers[idx] === q.correctOption) {
        score += 1;
      }
    });

    const passed = score >= 5;

    // Save Attempt
    await TestAttempt.create({
      student: req.user._id,
      task: task._id,
      plan: task.plan._id,
      examType: task.examType,
      subject: task.subject,
      topic: task.topic,
      testType: type,
      questions,
      selectedAnswers,
      score,
      passed
    });

    if (type === 'task') {
      if (passed) {
        task.taskTestPassed = true;
        task.taskTestScore = score;
        await task.save();
        return res.json({ success: true, score, message: 'Passed! Mock test unlocked.' });
      } else {
        task.reattempts += 1;
        await task.save();
        return res.json({ success: false, score, message: 'Score <= 5. You must reattempt.' });
      }
    } else if (type === 'mock') {
      if (!task.taskTestPassed) return res.status(400).json({ message: 'Task test not passed yet!' });
      if (passed) {
        task.mockTestPassed = true;
        task.mockTestScore = score;
        task.status = 'completed';
        await task.save();
        return res.json({ success: true, score, message: 'Passed Mock Test! Task Completed.' });
      } else {
        // failed mock test
        await task.save();
        return res.json({ success: false, score, message: 'Mock Test Failed. Reattempt required.' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/tasks/progress
router.get('/progress', protect, async (req, res) => {
  try {
     const { calculateStudentAnalytics } = require('../utils/analyticsService');
     const stats = await calculateStudentAnalytics(req.user._id);
     
     delete stats.plans; // Not needed strictly for student view

     res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
