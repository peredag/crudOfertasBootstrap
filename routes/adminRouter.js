let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminController')
//const upload = require('../middlewares/uploadProductFiles')/* --MULTER-- ORIGINAL JONA*/
const upload = require('../middlewares/uploadProductFiles')/* --MULTER-- */


router.get('/', controller.adminIndex)

router.get('/categorias', controller.categorias)

router.get('/agregarCategoria', controller.create)

//router.post('/agregarCategoria', upload.single('image'), controller.store)// multer va en la ruta que recibe los datos del form
router.post('/agregarCategoria', upload.single('image'), controller.store)

router.get('/editarCategoria/:id', controller.edit)

router.put('/editarCategoria/:id', upload.single('image'), controller.update)

router.delete('/eliminarCategoria/:id', controller.destroy)


module.exports = router;