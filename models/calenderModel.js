const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require("bcrypt");
const crypto = require('crypto');



// Declare the Schema of the Mongo model
var calenderSchema = new mongoose.Schema({
    Saturday:{
        type:String,
        required:true,
    },
    Sunday:{
        type:String,
        required:true,
    },
    Monday:{
        type:String,
        required:true,
    },
    Tuesday:{
        type:String,
        required:true,
    },
    Wednesday:{
        type:String,
        required:true,
    },
    Thursday:{
        type:String,
        required:true,
    },
    Friday:{
        type:String,
        required:true,
    },

},{
    timestamps : true ,
});



//Export the model
module.exports = mongoose.model('Calender', calenderSchema);