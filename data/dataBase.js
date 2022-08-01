let fs = require('fs');

module.exports = {
    getCategorias : JSON.parse(fs.readFileSync('./data/categorias.json', 'utf-8')),
    getProductos : JSON.parse(fs.readFileSync('./data/productos.json', 'utf-8')),
    writeJson : (dataBase) => {
        fs.writeFileSync('./data/productos.json', JSON.stringify(dataBase), "utf-8")
    },
}

