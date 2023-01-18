const LoginSchema = require("../model/Login_Schema")
const ParentSignUpSchema = require("../model/ParentSignUp_Schema")
const SingnUpSchema = require("../model/SingnUp_Schema")
const TeacherSignUpSchema = require("../model/TeacherSignUp_Schema")
const { hash_password } = require("../bcrypt/bcrypt")


exports.signUp = async(req,res)=>{
    console.log("xxxxxxxxxxxx",req.body)
    const email = req.body.email
    const check_mail = await SingnUpSchema.findOne({email:email})
    if(check_mail){
        res.send("user already exist")
    }
    else{
        console.log(req.files)
        if(req.body.password===req.body.confirmPassword){
        const hashpassword = await hash_password(req.body.password)
        req.body.password = hashpassword
        const urls = req?.files?.map((obj)=> `http://localhost:4000/uploads/${obj.filename}`)
        console.log(urls)
        req.body.id_Proof=urls;
        console.log("ffffffffffffff",req.body)
        SingnUpSchema(req.body).save(async (err, result) => {
            
            
            if (err) {
                res.send(new Error("Data not saved")); 
            }
            else {
                console.log("bsdnb", result) 
                res.status(200).send({ result })
            }
          
   
    })
}
else{
    res.send("confirmPassword is not matched")
} 
    }

}
exports.Parent_SignUp = async (req, res) => {
    const email = req.body.email
    const check_mail = await ParentSignUpSchema.findOne({email:email})
    if(check_mail){
        res.send("user already exist")
        console.log("user already exist")
    }
    else{
        if(req.body.password===req.body.confirmPassword){
            const hashpassword = await hash_password(req.body.password)
            req.body.password = hashpassword
            ParentSignUpSchema(req.body).save(async (err, result) => {
                
                if (err) {
                    console.log(err)
                    res.send(new Error(err));
                }
                else {
                    console.log("bsdnb", result) 
                    res.status(200).send({ result })
                }
        })

    }
     
    else{
        res.send("confirmPassword is not matched")
    }
}


}
exports.Teacher_SignUp = async (req, res) =>{
    if(req.body.password===req.body.confirmPassword){
    TeacherSignUpSchema(req.body).save(async(err, result)=>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            console.log("qqqqqqqq",result)
            res.send(result)
        }
    })
}
else{
    res.send("confirmPassword is not matched")
}
}
exports.Student_Detail = async(req,res)=>{
    const Details = await SingnUpSchema.find();
    console.log(Details)
    res.send(Details)

}
exports.Parent_Details= async(req,res)=>{
    const Details = await ParentSignUpSchema.find();
    res.send(Details)
}
exports.Teacher_Details = async(req,res)=>{
    const Details = await TeacherSignUpSchema.find();
    res.send(Details)
}
exports.Login = async(req,res)=>{
    LoginSchema(req.body).save(async(err,result)=>err?res.send(err):(res.send(result),console.log(result)))
}
exports.loginDetail = async(req,res)=>{
    const Details = await LoginSchema.find();
    res.send(Details)

}