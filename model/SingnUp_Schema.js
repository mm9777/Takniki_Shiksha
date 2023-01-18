const mongoose = require('mongoose')
const SingnUp_Schema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    schoolName:{
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
    roll_No:{
        type:Number,
        required:true,
    },
    id_Proof:{
        type:Array,
    }, 
})
const SingnUpSchema = mongoose.model("SignUp_Schema",SingnUp_Schema)
module.exports = SingnUpSchema            