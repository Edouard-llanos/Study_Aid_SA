// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authMiddleware'); // Si necesitas autenticación

// Rutas públicas
router.post('/register', userController.register);
router.post('/login', userController.login);

// Rutas protegidas (requieren autenticación)
router.get('/profile', authMiddleware, userController.getProfile);
router.put('/profile', authMiddleware, userController.updateProfile);

module.exports = router;