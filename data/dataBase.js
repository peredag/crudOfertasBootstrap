let fs = require('fs');

module.exports = {
    getCategorias : JSON.parse(fs.readFileSync('./data/categorias.json', 'utf-8')),
    getProductos : JSON.parse(fs.readFileSync('./data/productos.json', 'utf-8')),
    writeJson : (dataBase) => {
        fs.writeFileSync('./data/categorias.json', JSON.stringify(dataBase), "utf-8")
    },
}

// es un objeto que exporta 2 prop y un metodo
// el metodo getsucursales --> parsea las sucursales que estan en el archivo json
// el metodo get autos --> que parsea los autos que estan en el json
// el metodo writejson, que recibe un array y lo que hace lo escribe en el json y le aplica el metodo stringify
//
// esto es lo que veniamos usando desde los json en app notas por ejemplo