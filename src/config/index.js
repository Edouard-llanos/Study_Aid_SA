// config/index.js
require('dotenv').config(); // Carga las variables de entorno desde .env

module.exports = {
    port: process.env.PORT || 3000, // Puerto del servidor (usa el .env o 3000 por defecto)
    databaseURL: process.env.DATABASE_URL || 'mongodb://localhost:27017/mi-app', // URL de la base de datos
    jwtSecret: process.env.JWT_SECRET || 'clave-secreta-de-desarrollo', // Clave secreta para JWT
    // ... otras configuraciones
};