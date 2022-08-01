const fs = require('fs');
let { getCategorias, getProductos, writeJson } = require('../data/dataBase')

let controller = {
    adminIndex: function (req, res) {
        res.render('admin/adminIndex')
    },
    productos: function (req, res) {
        res.render('admin/adminProductos', {
            productos: getProductos,
        
        })
    },
    create: (req, res) => {
        res.render('admin/agregarProducto')
    },
    store: (req, res) => {
       
        let lastId = 1;

        getProductos.forEach(producto => {
            if (producto.id > lastId) {
                lastId = producto.id
            }
        });

        let nuevoProducto = {
            id: lastId + 1,
            nombre: req.body.nombre,
            categoria: +req.body.categoria,
            cantidad: req.body.cantidad,
            precio: req.body.precio,
            descuento: req.body.descuento,
            descripcion: req.body.descripcion,
            imagen: req.file ? req.file.filename : "default.jpg"
        }

        getProductos.push(nuevoProducto);

        writeJson(getProductos)

        res.redirect('/admin/productos')
    },
    edit: (req, res) => {
        let idProducto = +req.params.id;

        let producto = getProductos.find(producto => producto.id === idProducto)

        res.render('admin/editarProducto', {
            producto
        })

    },
    update: (req, res) => {
        let idProducto = +req.params.id;

        const {nombre, categoria, cantidad, precio, descuento, descripcion} = req.body;

        getProductos.forEach(producto => {
            if(producto.id === idProducto){
                producto.id = producto.id,
                producto.nombre = nombre,
                producto.categoria = +categoria,
                producto.cantidad = cantidad,
                producto.precio = precio,
                producto.descuento = descuento,
                producto.descripcion = descripcion 
                if(req.file){

                    if (fs.existsSync("./public/images/", producto.imagen)) {
                        fs.unlinkSync(`./public/images/${producto.imagen}`)
                    } else {
                        console.log("no encontre el archivo")
                    }
                    producto.imagen = req.file.filename

                }else{
                    producto.imagen = producto.imagen
                }

            }
        })

        writeJson(getProductos)
        res.redirect('/admin/productos')
    },
    destroy: (req, res) => {
        let idProducto = +req.params.id;

        getProductos.forEach(producto => {
            if(producto.id === idProducto){ 
                if (fs.existsSync("./public/images/", producto.imagen)) {
                    fs.unlinkSync(`./public/images/${producto.imagen}`)
                } else {
                    console.log("no encontre el archivo")
                }

                let productoEliminar = getProductos.indexOf(producto)
                if (productoEliminar !== -1) {
                    getProductos.splice(productoEliminar, 1)
                } else {
                    console.log("no encontre el producto")
                }
               
            }
        })

        

        writeJson(getProductos)
        res.redirect('/admin/productos') 
    } 
    
}

module.exports = controller
