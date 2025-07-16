// src/routes/topicRoutes.js
const express = require('express');
const router  = express.Router();

// Importa las funciones que tu controlador debe exportar
const {
    getAllTopics,
    getTopicById,
    createTopic,
    updateTopic,
    deleteTopic
} = require('../controllers/topicController');

// Define las rutas con handlers válidos
router.get( '/',      getAllTopics);
router.get( '/:id',   getTopicById);
router.post('/',      createTopic);
router.put( '/:id',   updateTopic);
router.delete('/:id', deleteTopic);

module.exports = router;