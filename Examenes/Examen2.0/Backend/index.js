const express = require('express')
const cors = require('cors')
const Producto = require('./models/Productos')
const sequelize = require('./db')
const app = express()
app.use(cors())
app.use(express.json())

// Sincronizar los modelos con la base de datos:
sequelize.sync()
    .then(() => console.log('Modelos sincronizados correctamente'))
    .catch(err => console.log('Error al sincronizar modelos: ' + err))

// metodo para obtener todos los productos:
app.get('/api/productos', async (req, res) => {
    try {
        const productos = await Producto.findAll()
        if (productos.length > 0) {
            res.status(200).json(productos)
        } else {
            res.status(404).json({ message: 'No se encontraron productos' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos: ' + error })
    }
})

// Meotod de guardar producto
app.post('/api/productos', async (req, res) => {
    try {
        const producto = await Producto.create(req.body)
        if (producto) {
            res.status(200).json(producto)
        } else {
            res.status(400).json({ message: 'Error al guardar producto' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al guardar producto: ' + error })
    }
})

// Metodo de eliminar producto
app.delete('/api/productos/:id', async (req, res) => {
    try {
        const producto = await Producto.destroy({ where: { idProducto: req.params.id }})
        if (producto) {
            res.status(200).json({ message: 'Producto eliminado correctamente' })
        } else {
            res.status(404).json({ message: 'Producto no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar producto: ' + error })
    }
})
app.listen(5000, () => {
    console.log('eL servidor esta corriendo en puerto: 5000')
})