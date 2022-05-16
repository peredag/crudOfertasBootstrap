const fs = require('fs');
let { getCategorias, getProductos, writeJson } = require('../data/dataBase')

let controller = {
    adminIndex: function (req, res) {
        res.render('admin/adminIndex')
    },
    categorias: (req, res) => {
        res.render('admin/adminCategorias', {
            categorias: getCategorias,
            productos: function (idCategoria) {
                return getProductos.filter(producto => producto.categoria === idCategoria)
            }
        })
    },
    create: (req, res) => {
        res.render('admin/agregarCategoria')
    },
    store: (req, res) => {
        //res.send(req.file) para verificar que envia

        let lastId = 1;

        getCategorias.forEach(categoria => {
            if (categoria.id > lastId) {
                lastId = categoria.id
            }
        });

        let nuevaCategoria = {
            id: lastId + 1,
            nombre: req.body.nombre,
            info: req.body.info,
            material: req.body.material,
            //imagen: "default.jpg"
            imagen: req.file ? req.file.filename : "default.jpg"
            //image: req.file ? req.file.filename : "default-image.jpg"
        }

        getCategorias.push(nuevaCategoria);

        writeJson(getCategorias)

        res.redirect('/admin/categorias')
    },
    
    edit: (req, res) => {
        let idCategoria = +req.params.id;

        let categoria = getCategorias.find(categoria => categoria.id === idCategoria)

        res.render('admin/editarCategoria', {
            categoria
        })

    },
    update: (req, res) => {
        let idCategoria = +req.params.id;

        const {nombre, info, material} = req.body;

        getCategorias.forEach(categoria => {
            if(categoria.id === idCategoria){
                categoria.id = categoria.id,
                categoria.nombre = nombre,
                categoria.info = info,
                //opcion 1  // no borra la imagen anterior
                //categoria.material = material,
                //categoria.imagen = req.file ? req.file.filename : categoria.imagen  // no borra la imagen anterior
                //OPCION 2
                categoria.material = material // sacar la coma
                if(req.file){

                    if (fs.existsSync("./public/images/", categoria.imagen)) {
                        fs.unlinkSync(`./public/images/${categoria.imagen}`)
                    } else {
                        console.log("no encontre el archivo")
                    }
                    categoria.imagen = req.file.filename

                }else{
                    categoria.imagen = categoria.imagen
                }

                


            }
        })

        writeJson(getCategorias)
        res.redirect('/admin/categorias')
        
    },
    destroy: (req, res) => {
        let idCategoria = +req.params.id;

        getCategorias.forEach(categoria => {
            if(categoria.id === idCategoria){ 
                if (fs.existsSync("./public/images/", categoria.imagen)) {
                    fs.unlinkSync(`./public/images/${categoria.imagen}`)
                } else {
                    console.log("no encontre el archivo")
                }

                let categoriaEliminar = getCategorias.indexOf(categoria)
                if (categoriaEliminar !== -1) {
                    getCategorias.splice(categoriaEliminar, 1)
                } else {
                    console.log("no encontre el producto")
                }
               
            }
        })

        

        writeJson(getCategorias)
        res.redirect('/admin/categorias') 
    }
    


}

module.exports = controller
