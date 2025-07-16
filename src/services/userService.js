// services/userService.js
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const register = async (userData) => {
    try {
        const { password } = userData;
        const hashedPassword = await bcrypt.hash(password, 10); // Encripta la contraseña
        const user = new User({ ...userData, password: hashedPassword });
        return await user.save(); // Espera a que se guarde el usuario
    } catch (error) {
        // Maneja el error de registro (por ejemplo, validación de datos)
        throw new Error(`Error al registrar usuario: ${error.message}`);
    }
};

const login = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Credenciales inválidas');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Credenciales inválidas');
        }
        return user;
    } catch (error) {
        // Maneja el error de inicio de sesión
        throw new Error(`Error al iniciar sesión: ${error.message}`);
    }
};

const getProfile = async (userId) => {
    try {
        const user = await User.findById(userId).select('-password'); // Excluye la contraseña
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        return user;
    } catch (error) {
        throw new Error(`Error al obtener el perfil: ${error.message}`);
    }
};

const updateProfile = async (userId, userData) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true }).select('-password');
        if (!updatedUser) {
            throw new Error('Usuario no encontrado');
        }
        return updatedUser;
    } catch (error) {
        throw new Error(`Error al actualizar el perfil: ${error.message}`);
    }
};

module.exports = {
    register,
    login,
    getProfile,
    updateProfile
};