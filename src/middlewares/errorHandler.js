// middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log del error
    res.status(500).json({ message: 'Algo salió mal', error: err.message });
};

module.exports = { errorHandler };