let {getProductos} = require('../data/dataBase.js')

let controller = {
    
    productos: (req, res) => {
        res.render('detail', {
            productos: getProductos
        })
    }
}

module.exports = controller