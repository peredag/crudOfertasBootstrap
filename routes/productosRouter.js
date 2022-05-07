let express = require('express');
let router = express.Router();

let controller = require('../controllers/productosController')

router.get('/', controller.productos)

module.exports = router