const express = require('express');
const router = express.Router();
const { createCalender, getCalender } = require('../controller/calenderCtrl'); 

router.post('/saveCalendar', createCalender); 
router.get('/calender/:id', getCalender); 

module.exports = router;
