// src/server.js
const app = require('./app');
const { port: defaultPort } = require('./config');
const PORT = process.env.PORT || defaultPort || 3000;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

server.on('error', err => {
    console.error('Error al iniciar el servidor:', err);
    process.exit(1);
});