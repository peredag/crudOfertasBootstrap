let {getCategorias} = require('../data/dataBase.js')

let controller = {
 index: function(req, res) {
    res.render('index', { 
      categorias: getCategorias 
    });
  }
}

module.exports = controller;