// server.js
const app = require('./app'); // Importa la configuración de Express desde app.js
const config = require('./app/config'); // Importa la configuración del sistema

app.listen(config.port, () => {
    console.log(`Servidor escuchando en el puerto ${config.port}`);
});