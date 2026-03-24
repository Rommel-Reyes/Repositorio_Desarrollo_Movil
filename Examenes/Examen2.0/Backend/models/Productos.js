const { DataTypes } = require('sequelize')
const sequelize = require('../db')

// Modelo de producto utilizando lo aprendido en web II:
const Producto = sequelize.define('Producto', {
    idProducto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('Disponible', 'No disponible'),
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    url_fotografia: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'productos',
    timestamps: false
})
module.exports = Producto