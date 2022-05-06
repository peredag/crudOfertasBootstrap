let express = require('express');
let router = express.Router();
let controller = require('../controllers/indexController')/*  */

/* GET home page. */
router.get('/', controller.index );/*  */

module.exports = router;
