const multer = require('multer') 
const path = require('path')    

const storage = multer.diskStorage({
    destination: function (req, file, callBack) {  
        //callBack(null, path.join(__dirname, '../../public/images/products')) ORIGINAL JONA ../sale de src../sale de middlewares
        callBack(null, path.join(__dirname, '../public/images')) // mi ruta
    },
    filename: function (req, file, callBack) {      
        callBack(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

const uploadFile = multer({storage}) 

module.exports = uploadFile;

// este mismo bloque se puede copiar entero y poner en otros proyectos