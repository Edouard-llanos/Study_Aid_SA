// services/userService.js
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const register = async (userData) => {
    const { password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10); // Encripta la contraseña
    const user = new User({ ...userData, password: hashedPassword });
    return user.save();
};

const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Credenciales inválidas');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Credenciales inválidas');
    }
    return user;
};

// ... otras funciones del servicio
module.exports = { register, login, /* ... */ };