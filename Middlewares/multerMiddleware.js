const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,`movieImg-${file.originalname}`)
    }
})

const multerMiddleware = {
    storage
}
module.exports = multerMiddleware