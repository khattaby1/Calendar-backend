const express = require('express');
const { generateAIResponse } = require('../controller/aiCtrl');
const router = express.Router();

router.post('/generate', generateAIResponse);

module.exports = router;
