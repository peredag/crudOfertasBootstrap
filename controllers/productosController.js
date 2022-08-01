let {getProductos} = require('../data/dataBase.js')

let controller = {
    
    productos: (req, res) => {
        res.render('productos', {
            productos: getProductos
        })
    }
}

module.exports = controller