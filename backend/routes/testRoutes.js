const express = require('express');
const { generateTest } = require('../controllers/testController');
const { protect } = require('../middlewares/auth');

const router = express.Router();

router.get('/generate', protect, generateTest);

module.exports = router;
