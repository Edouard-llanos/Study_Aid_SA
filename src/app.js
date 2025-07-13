// app.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config'); // Importa la configuración del sistema
const userRoutes = require('./routes/userRoutes');
const topicRoutes = require('./routes/topicRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

// Middlewares
app.use(cors()); // Habilita CORS
app.use(express.json()); // Para parsear el cuerpo de las peticiones como JSON

// Conexión a la base de datos (si usas Mongoose)
mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/topics', topicRoutes);

// Middleware de manejo de errores (siempre al final)
app.use(errorHandler);

module.exports = app;
