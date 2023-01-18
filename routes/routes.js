const routes = require("express").Router();
const { signUp,Parent_SignUp,Teacher_SignUp,Student_Detail,Parent_Details,Teacher_Details,Login,loginDetail} = require("../controller/controller");
const { result_validator } = require("../middleware/global_middleware");
const upload = require("../multer/multer");
const {student_validator,login_validator} = require("../validation/student_validation");

(()=>{
    post_request();
    get_request();
})();
function post_request(){
    routes.post("/SignUp",upload.array('photos', 12),student_validator(),result_validator,signUp )
    routes.post("/parentSignUp",Parent_SignUp)
    routes.post("/teacherSignup",Teacher_SignUp)
    routes.post("/login",login_validator(),result_validator,Login);
}
function get_request(){
    routes.get("/studentSignUpDetail",Student_Detail)
    routes.get("/parentsSignUpDetail",Parent_Details)
    routes.get("/techerSignUpDetails",Teacher_Details)
    routes.get("/loginDetail",loginDetail)
}
module.exports= routes;
