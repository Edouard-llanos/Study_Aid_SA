// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/userModel');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, config.jwtSecret);
        const user = await User.findById(decoded.userId);

        if (!user) {
            throw new Error('No autorizado');
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'No autorizado' });
    }
};