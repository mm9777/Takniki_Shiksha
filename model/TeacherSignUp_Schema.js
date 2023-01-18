const mongoose = require('mongoose')
const TeacherSignUp_Schema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    mobile_No:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
    },
    Employee_Code:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
        required:true
    }
})
const TeacherSignUpSchema = mongoose.model("TeacherSignUp_Schema",TeacherSignUp_Schema);
module.exports = TeacherSignUpSchema;