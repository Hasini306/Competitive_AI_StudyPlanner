const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // ----- MENTOR SEED / NORMALIZE LOGIC -----
    try {
      const User = require('../models/User');
      const bcrypt = require('bcryptjs');

      // Find all mentors in the system
      const mentors = await User.find({ role: 'mentor' });

      if (mentors.length === 0) {
        // Create one if it doesn't exist
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('mentor123', salt);
        await User.create({
          name: 'Default Mentor',
          email: 'mentor@gmail.com',
          password: hashedPassword,
          role: 'mentor'
        });
        console.log('Created default mentor: mentor@gmail.com');
      } else {
        // Normalize the first mentor to exactly the correct details
        const mainMentor = mentors[0];
        mainMentor.email = 'mentor@gmail.com';
        mainMentor.name = 'Default Mentor';

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('mentor123', salt);
        mainMentor.password = hashedPassword; // Reset password

        await mainMentor.save();
        console.log('Default mentor verified/reset to: mentor@gmail.com');

        // Delete any other redundant mentors
        if (mentors.length > 1) {
          const keepId = mainMentor._id;
          await User.deleteMany({ role: 'mentor', _id: { $ne: keepId } });
          console.log('Removed duplicate mentor accounts safely.');
        }
      }
    } catch (seedErr) {
      console.error('Mentor seed error:', seedErr.message);
    }
    // -----------------------------------------

  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
