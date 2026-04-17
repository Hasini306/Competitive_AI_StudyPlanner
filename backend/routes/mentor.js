const express = require('express');
const { protect, mentorOnly } = require('../middlewares/auth');
const User = require('../models/User');
const Task = require('../models/Task');
const Message = require('../models/Message');

const router = express.Router();

const stripTime = (dateStr) => {
  const d = new Date(dateStr);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};

// @route   GET /api/mentor/students
router.get('/students', protect, mentorOnly, async (req, res) => {
  try {
    // Auto-migrate any students regardless of previous assignment to the active default logged-in mentor
    await User.updateMany(
      { role: 'student' },
      { $set: { mentorId: req.user._id } }
    );

    // Current mentor's students
    const students = await User.find({ role: 'student', mentorId: req.user._id }).select('-password');
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/mentor/incomplete-work
// Students who have NOT completed today's tasks or have missed past/carried forward tasks
router.get('/incomplete-work', protect, mentorOnly, async (req, res) => {
  try {
    const today = stripTime(new Date());

    // Auto-migrate logic to catch unassigned students evaluating incomplete work
    await User.updateMany(
      { role: 'student' },
      { $set: { mentorId: req.user._id } }
    );

    const students = await User.find({ role: 'student', mentorId: req.user._id }).select('-password');
    const StudyPlan = require('../models/StudyPlan');
    
    const incompleteStudents = [];
    
    for (const student of students) {
       const plans = await StudyPlan.find({ userId: student._id });
       let hasIncomplete = false;
       
       for (const plan of plans) {
          for (const day of plan.planDays) {
             const dayDate = stripTime(day.date);
             if (dayDate <= today) {
                // If the day is past or present, any task inside that is NOT completed means they are lagging
                const uncompletedTaskExists = day.tasks.some(t => !t.completed);
                if (uncompletedTaskExists) {
                   hasIncomplete = true;
                   break;
                }
             }
          }
          if (hasIncomplete) break;
       }
       
       if (hasIncomplete) {
          incompleteStudents.push(student);
       }
    }

    res.json(incompleteStudents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/mentor/message
router.post('/message', protect, mentorOnly, async (req, res) => {
  try {
    const { studentId, text, type } = req.body;
    
    let resolvedType = 'Message from Mentor';
    if (type === 'reminder') resolvedType = 'Reminder from Mentor';

    const msg = await Message.create({
      mentor: req.user._id,
      student: studentId,
      content: text,
      type: resolvedType
    });

    res.status(201).json(msg);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/mentor/student/:id/progress
router.get('/student/:id/progress', protect, mentorOnly, async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await User.findById(studentId).select('-password');
    if(!student) return res.status(404).json({message: 'Student not found'});

    const { calculateStudentAnalytics } = require('../utils/analyticsService');
    const stats = await calculateStudentAnalytics(studentId);

    res.json({
      student,
      totalTasks: stats.totalUniqueTasks,
      completedTasks: stats.completedUniqueTasks,
      pendingTasks: stats.pendingUniqueTasks,
      lockedTasks: stats.lockedUniqueTasks,
      repeatTests: stats.totalReattempts,
      totalTestsTaken: stats.testSummary.testsTaken,
      testsPassed: stats.testSummary.testsPassed,
      testsFailed: stats.testSummary.testsFailed,
      subjectProgress: stats.subjectProgress,
      plans: stats.plans
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/student/messages (Student route actually, but placing here or we can put it in a separate route)
router.get('/my-messages', protect, async (req, res) => {
  try {
    const messages = await Message.find({ student: req.user._id, read: { $ne: true } }).sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
     res.status(500).json({ message: error.message });
  }
});

// @route   PUT /api/mentor/my-messages/:id/read
router.put('/my-messages/:id/read', protect, async (req, res) => {
  try {
     const msg = await Message.findById(req.params.id);
     if (!msg) return res.status(404).json({ message: "Message not found" });
     if (msg.student.toString() !== req.user._id.toString()) return res.status(401).json({ message: "Not authorized" });
     
     msg.read = true;
     await msg.save();
     res.json(msg);
  } catch (error) {
     res.status(500).json({ message: error.message });
  }
});

module.exports = router;
