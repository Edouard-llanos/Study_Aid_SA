// src/app.js
const express      = require('express');
const cors         = require('cors');
const mongoose     = require('mongoose');
const config       = require('./config');               // src/config/index.js
const userRoutes   = require('./routes/userRoutes');    // ahora debe ser un Router
const topicRoutes  = require('./routes/topicRoutes');   // idem
const errorHandler = require('./middlewares/errorHandler'); // función middleware

const app = express();

app.use(cors());
app.use(express.json());

// conexión a MongoDB
mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ Conectado a la base de datos'))
    .catch(err => console.error('❌ Error BD:', err));

// monta correctamente los routers
app.use('/api/users',  userRoutes);
app.use('/api/topics', topicRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: `No se encontró ${req.originalUrl}` });
});

// error handler
app.use(errorHandler);

module.exports = app;