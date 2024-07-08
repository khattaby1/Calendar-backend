const asyncHandler = require('express-async-handler');
const Calender = require('../models/calenderModel');

const createCalender = asyncHandler (async (req,res)=>{
try{
    const newCalnder = await Calender.create(req.body)
    res.json(newCalnder)
}
catch(err){
    throw new Error(err)
}
})

const getCalender = async (req, res) => {
    const { id } = req.params;
  
    try {
        const calendar = await Calender.findById(id, '-_id -createdAt -updatedAt -__v');
        if (!calendar) {
        return res.status(404).json({ message: 'Calendar not found' });
      }
      res.json(calendar); 
    } catch (error) {
      console.error('Error fetching calendar:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };


module.exports = {
    createCalender,
    getCalender
};
