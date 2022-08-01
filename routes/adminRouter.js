let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminController')
const upload = require('../middlewares/uploadProductFiles')/* --MULTER-- */


router.get('/', controller.adminIndex)

router.get('/productos', controller.productos)

router.get('/agregarProducto', controller.create)


router.post('/agregarProducto', upload.single('image'), controller.store)

router.get('/editarProducto/:id', controller.edit)

router.put('/editarProducto/:id', upload.single('image'), controller.update)

router.delete('/eliminarProducto/:id', controller.destroy)


module.exports = router;