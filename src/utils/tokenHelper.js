// utils/tokenHelper.js
const jwt = require('jsonwebtoken');
const config = require('../config');

const generateToken = (user) => {
    return jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' }); // Expira en 1 hora
};

module.exports = { generateToken };