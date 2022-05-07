let { getCategorias, getProductos, writeJson } = require('../data/dataBase')

let controller = {
 adminIndex: function(req, res){
    res.render('admin/adminIndex')
 },
 categorias: (req, res) => {
     res.render('admin/adminCategorias', {
         categorias: getCategorias,
         productos: function (idCategoria) {
             return getProductos.filter(producto => producto.categoria === idCategoria)
         }
     })
 }

}

module.exports = controller
