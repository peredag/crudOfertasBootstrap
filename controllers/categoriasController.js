let { getCategorias, getProductos } = require('../data/dataBase')


let controller = {
    categoria: (req, res) =>{
        let categoriaId = +req.params.id;

        let categoria = getCategorias.find(categoria => categoria.id === categoriaId)

        if (categoria !== undefined) {
            let productos = getProductos.filter(producto => producto.categoria === categoriaId)

            res.render('categoria', {
                categoria,
                productos
            })
        } else {
            res.send("no se encuentra")
        }
    }
}

module.exports = controller