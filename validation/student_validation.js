const SingnUpSchema = require("../model/SingnUp_Schema");
const { check } = require("express-validator");
const ParentSignUpSchema = require("../model/ParentSignUp_Schema");
const TeacherSignUpSchema = require("../model/TeacherSignUp_Schema");
// const moduleSchema = require('../model/module_schema')
exports.student_validator = () => {
  return [
    // check('Empty')
    // .isEmpty().withMessage("fill all form")
    //       .custom( async (Empty,{req})=>{
    //         const prod = req.body.fullName
    //         console.log(prod,"jnn",req.body)
    //        const user_info = await SingnUpSchema.findOne({fullName:prod})
    //         console.log(user_info)
    //         if(user_info){
    //              throw new Error("Student is allready exist");
    //       }
    //   else{
    //          req.body.userInfo = user_info;
    //   }
    //         return true;
    // }),
  ];
};
exports.login_validator = () => {
  return [
    check("password")
      .isLength({ min: 5 })
      .withMessage("must be at least 5 chars long")
      .matches(/\d/),
    check("email").custom(async (email, { req }) => {
      const plain_password = req.body.password;
      const user_info = await SingnUpSchema.findOne({ email }, { __v: false });
      // const hash_password = user_info.password
      // const result = await bcrypt.compare(plain_password,hash_password)

      if (!user_info) {
        throw new Error("Invalid User");
      }

      req.body.userInfo = user_info;

      return true;
    }),

    check("password").custom(async (password, { req }) => {
      const user_info = await SingnUpSchema.findOne(
        { password },
        { __v: false }
      );
      if (!user_info) {
        throw new Error("Password is Not Match");
      }
      req.body.userInfo = user_info;
      return true;
    }),
  ];
};
exports.login_validator = () => {
  return [
    check("password")
      .isLength({ min: 5 })
      .withMessage("must be at least 5 chars long")
      .matches(/\d/),
    check("email").custom(async (email, { req }) => {
      const user_fifo = await ParentSignUpSchema.findOne(
        { email },
        { __v: false }
      );
      if (!user_fifo) {
        throw new Error("invalid user");
      }
      req.body.userfifo = user_fifo;
    }),
    check("password").custom(async (password, { req }) => {
      const user_fifo = await ParentSignUpSchema.findOne(
        { password },
        { __v: false }
      );
      if (!user_fifo) {
        throw new Error("password is not match");
      }
      req.body.userfifo = user_fifo;
    }),
  ];
};
exports.login_validator=()=>{
  return[
    check('password')
    .isLength({min:5})
    .withMessage("must be at least 5 char long")
    .matches(/\d/),
    check("email").custom(async(email,{req})=>{
      const user_info = await TeacherSignUpSchema.findOne({email},
             {__v:false});
      if(!user_info){throw new Error("Invalid user")}
      req.body.userInfo = user_info;
    }),
    check("password").custom(async(password,{req})=>{
      const user_info = await TeacherSignUpSchema.findOne({password},
           {__v:false});
      if(!user_info){throw new Error("password is not matched")}
      req.body.userInfo = user_info;
    })

  ]
}
