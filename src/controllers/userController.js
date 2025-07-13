// controllers/userController.js
const userService = require('../services/userService');
const { generateToken } = require('../utils/tokenHelper'); // Si usas JWT

const register = async (req, res, next) => {
    try {
        const user = await userService.register(req.body);
        const token = generateToken(user); // Genera un token JWT
        res.status(201).json({ message: 'Usuario registrado con éxito', user, token });
    } catch (error) {
        next(error); // Pasa el error al middleware de manejo de errores
    }
};

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

// ... otras funciones del controlador
module.exports = { register, login, /* ... */ };