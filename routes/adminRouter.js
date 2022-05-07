let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminController')

router.get('/', controller.adminIndex);

router.get('/categorias', controller.categorias);


module.exports = router;