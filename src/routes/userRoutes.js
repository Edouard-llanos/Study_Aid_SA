const express = require('express');
const router  = express.Router();

// Asegúrate de importar un controlador que **sí** exporte funciones:
// Por ejemplo, en ../controllers/userController.js:
// module.exports = { getAllUsers, getUserById, … }
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

// Define tus endpoints con handlers válidos:
router.get('/',       getAllUsers);
router.get('/:id',    getUserById);
router.post('/',      createUser);
router.put('/:id',    updateUser);
router.delete('/:id', deleteUser);

// **EXPORTA** directamente el router, no dentro de un objeto:
module.exports = router;