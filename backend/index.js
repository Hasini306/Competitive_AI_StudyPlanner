const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/planner', require('./routes/planner'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/mentor', require('./routes/mentor'));
app.use('/api/user', require('./routes/user'));
app.use('/api/test', require('./routes/testRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
