const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require("bcrypt");
const crypto = require('crypto');



// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        index:true,
    },
    lastname:{
        type:String,
        required:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },

},{
    timestamps : true ,
});
 userSchema.pre("save" , async function (next) {
    if(this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
 });

 userSchema.methods.isPasswordMatched = async function (enterdPassword){
    return (enterdPassword == this.password)
 };
 


//Export the model
module.exports = mongoose.model('User', userSchema);