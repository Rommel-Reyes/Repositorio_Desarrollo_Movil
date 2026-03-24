CREATE DATABASE examen_productos;
USE examen_productos;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    estado ENUM('Disponible', 'No disponible') NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    url_fotografia TEXT
);

