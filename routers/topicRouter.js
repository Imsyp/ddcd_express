const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController.js');

router.get('/read/:topic_id', topicController.viewTopic);    
router.get('/create', topicController.createTopic);  
router.post('/create', topicController.createNewTopic); 
router.post('/delete/:topic_id', topicController.deleteTopic);   
router.get('/update/:topic_id', topicController.updateTopic);  
router.post('/update/:topic_id', topicController.updateNewTopic);  

module.exports = router;