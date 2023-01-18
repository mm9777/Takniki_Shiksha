const mongoose = require('mongoose');
const Login_Schema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}) 
const LoginSchema = mongoose.model("Login_Schema",Login_Schema);
module.exports = LoginSchema;