// controllers/userController.js
const userService = require('../services/userService');
const { generateToken } = require('../utils/tokenHelper');

// Registrar
const register = async (req, res, next) => {
    try {
        const user = await userService.register(req.body);
        const token = generateToken(user);
        res.status(201).json({ message: 'Usuario registrado con éxito', user, token });
    } catch (error) {
        next(error);
    }
};

// Login
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userService.login(email, password);
        const token = generateToken(user);
        res.json({ message: 'Inicio de sesión exitoso', user, token });
    } catch (error) {
        next(error);
    }
};

// Obtener perfil
const getProfile = async (req, res, next) => {
    try {
        const user = req.user; // Asegúrate que authMiddleware añade esto
        res.json({ user });
    } catch (error) {
        next(error);
    }
};

// Actualizar perfil
const updateProfile = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const updatedUser = await userService.updateProfile(userId, req.body);
        res.json({ message: 'Perfil actualizado', user: updatedUser });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
    getProfile,
    updateProfile
};