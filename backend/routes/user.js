const express = require('express');
const { protect } = require('../middlewares/auth');
const User = require('../models/User');

const router = express.Router();

const Message = require('../models/Message');

// @route   GET /api/user/profile
// @desc    Get currently logged in user profile, including mentor info & latest message
// @access  Private
router.get('/profile', protect, async (req, res) => {
  try {
     const user = await User.findById(req.user._id).select('-password').populate('mentorId', 'name email');
     if (!user) return res.status(404).json({ message: 'User not found' });

     let latestMessage = null;
     if (user.role === 'student' && user.mentorId) {
        latestMessage = await Message.findOne({ student: user._id })
          .sort({ createdAt: -1 })
          .select('content createdAt type');
     }

     res.json({
       user,
       mentor: user.mentorId,
       latestMessage
     });
  } catch (err) {
     res.status(500).json({ message: err.message });
  }
});

// @route   PUT /api/user/profile
// @desc    Update user profile data
// @access  Private
router.put('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    
    // Auth Logic
    if (req.body.password) {
      const bcrypt = require('bcryptjs');
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);
    }

    // New Profile Extended Attributes
    if (req.body.profileImage !== undefined) user.profileImage = req.body.profileImage;
    if (req.body.targetExam !== undefined) user.targetExam = req.body.targetExam;
    if (req.body.targetDate !== undefined) user.targetDate = req.body.targetDate;
    if (req.body.targetScore !== undefined) user.targetScore = req.body.targetScore;
    if (req.body.preferredStudyTime !== undefined) user.preferredStudyTime = req.body.preferredStudyTime;
    if (req.body.dailyTargetHours !== undefined) user.dailyTargetHours = req.body.dailyTargetHours;
    if (req.body.focusSubject !== undefined) user.focusSubject = req.body.focusSubject;
    
    // Contact Details
    if (req.body.phoneNumber !== undefined) user.phoneNumber = req.body.phoneNumber;
    if (req.body.alternatePhoneNumber !== undefined) user.alternatePhoneNumber = req.body.alternatePhoneNumber;
    if (req.body.city !== undefined) user.city = req.body.city;
    if (req.body.state !== undefined) user.state = req.body.state;
    if (req.body.country !== undefined) user.country = req.body.country;

    const updatedUser = await user.save();
    res.json({
       _id: updatedUser._id,
       name: updatedUser.name,
       email: updatedUser.email,
       role: updatedUser.role,
       token: req.headers.authorization.split(' ')[1] 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
