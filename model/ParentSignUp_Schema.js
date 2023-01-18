const mongoose = require('mongoose') ;
const ParentSignUp_Schema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile_No:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
        required:true,
    },
    StudentName:{
        type:String,
        required:true,
    },
    StudentRoll_No:{ 
        type:Number,
        required:true,
    }
});
const ParentSignUpSchema = mongoose.model("ParentSignUp_Schema",ParentSignUp_Schema);
module.exports = ParentSignUpSchema;
    
