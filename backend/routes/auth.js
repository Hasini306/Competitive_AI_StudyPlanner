const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();

const DEFAULT_MENTOR_EMAIL = 'mentor@gmail.com';
const DEFAULT_MENTOR_PASSWORD = 'mentor123';
const DEFAULT_MENTOR_NAME = 'Default Mentor';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const ensureDefaultMentor = async () => {
  let mentor = await User.findOne({ email: DEFAULT_MENTOR_EMAIL.toLowerCase() });
  const hashedPassword = await bcrypt.hash(DEFAULT_MENTOR_PASSWORD, 10);

  if (!mentor) {
    mentor = await User.create({
      name: DEFAULT_MENTOR_NAME,
      email: DEFAULT_MENTOR_EMAIL.toLowerCase(),
      password: hashedPassword,
      role: 'mentor'
    });
    return mentor;
  }

  mentor.name = DEFAULT_MENTOR_NAME;
  mentor.email = DEFAULT_MENTOR_EMAIL.toLowerCase();
  mentor.role = 'mentor';

  const valid = await bcrypt.compare(DEFAULT_MENTOR_PASSWORD, mentor.password);
  if (!valid) mentor.password = hashedPassword;
  await mentor.save();

  await User.updateMany(
    { role: 'student', $or: [{ mentorId: null }, { mentorId: { $exists: false } }] },
    { $set: { mentorId: mentor._id } }
  );

  return mentor;
};

router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    if (role === 'mentor') {
      return res.status(403).json({ message: 'Mentor registration is disabled. Use the default mentor account.' });
    }

    const normalizedEmail = String(email || '').trim().toLowerCase();
    const normalizedName = String(name || '').trim();

    const userExists = await User.findOne({ email: normalizedEmail });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const defaultMentor = await ensureDefaultMentor();
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: normalizedName,
      email: normalizedEmail,
      password: hashedPassword,
      role: 'student',
      mentorId: defaultMentor._id
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password, expectedRole } = req.body;

  try {
    const normalizedEmail = String(email || '').trim().toLowerCase();

    if (expectedRole === 'mentor') {
      await ensureDefaultMentor();
    }

    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    if (expectedRole && user.role !== expectedRole) {
      return res.status(403).json({ message: `Access Denied. Account strictly mapped to ${user.role} workspace.` });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
