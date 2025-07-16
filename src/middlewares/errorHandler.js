// src/middlewares/errorHandler.js
// — exporta directamente la función, NO un objeto ni llaves
function errorHandler(err, req, res, next) {
    const status = err.status || 500;
    res.status(status).json({
        message: err.message || 'Internal Server Error'
    });
}

module.exports = errorHandler;