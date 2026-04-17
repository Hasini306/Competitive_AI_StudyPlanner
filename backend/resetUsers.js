const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

dotenv.config();

const User = require('./models/User');
// Optional: If you want to clear orphan data as well, you would require models here. 
// For now, we are ONLY clearing Users to give a fresh authentication slate.

const authReset = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('🔗 Connected to MongoDB...');

    // 1. Remove all existing users (students and old mentors)
    await User.deleteMany({});
    console.log('🗑️  All existing user accounts (Students & Mentors) have been deleted.');

    // 2. Create the exact default mentor requested
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('mentor123', salt);
    
    await User.create({
      name: 'Default Mentor',
      email: 'mentor@gmail.com',
      password: hashedPassword,
      role: 'mentor'
    });

    console.log('✅ Default mentor successfully created.');
    console.log('--------------------------------------------------');
    console.log('Mentor Email: mentor@gmail.com');
    console.log('Mentor Password: mentor123');
    console.log('--------------------------------------------------');
    console.log('All new students signing up will automatically be assigned to this mentor.');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error resetting auth system:', error);
    process.exit(1);
  }
};

authReset();
