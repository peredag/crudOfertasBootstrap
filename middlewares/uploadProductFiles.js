const multer = require('multer') 
const path = require('path')    

const storage = multer.diskStorage({
    destination: function (req, file, callBack) {  
        
        callBack(null, path.join(__dirname, '../public/images')) 
    },
    filename: function (req, file, callBack) {      
        callBack(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

const uploadFile = multer({storage}) 

module.exports = uploadFile;

