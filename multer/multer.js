const multer = require('multer');
const path = require('path');


var storage = multer.diskStorage({
    destination: function(req,files,cb){
        cb(null,'uploads/')
        console.log(files)
    },
    filename:function(req,files,cb){
        let ext = path.extname(files.originalname)
        cb(null,Date.now()+ ext)
    }
})


var upload = multer({
    storage:storage,
    fileFilter:function(req,file,callback){
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpeg"
            
        ){
            callback(null,true)
        }
        else{
            console.log("image should be either in jpg or png")
            callback(null, false)
        }
    },
    limits:{
        fileSize: 1024*1024*100
    }
})
 
module.exports = upload