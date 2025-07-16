// src/controllers/topicController.js
async function getAllTopics(req, res, next) { /* … */ }
async function getTopicById(req, res, next) { /* … */ }
async function createTopic(req, res, next) { /* … */ }
async function updateTopic(req, res, next) { /* … */ }
async function deleteTopic(req, res, next) { /* … */ }

module.exports = {
    getAllTopics,
    getTopicById,
    createTopic,
    updateTopic,
    deleteTopic
};