let express = require('express');
let router = express.Router();

let controller = require('../controllers/categoriasController')

router.get('/:id', controller.categoria);

module.exports = router;