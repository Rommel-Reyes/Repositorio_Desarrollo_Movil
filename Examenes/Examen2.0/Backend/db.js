const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'examen_productos',
    'root',
    'transformers',
    {
        host: '127.0.0.1',
        port: 3306,
        dialect: 'mysql'
    }
)

// Verificar conexion con la base de dtos:
sequelize.authenticate()
    .then(() => console.log("Conexión a MySQL exitosa"))
    .catch(err => console.log("Error de conexión: " + err))

module.exports = sequelize