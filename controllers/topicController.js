const topicModel = require('../models/topicModel.js');  
const homeModel = require('../models/homeModel.js');   
const commentModel = require('../models/commentModel.js');

module.exports = {
    viewTopic: async (req, res) => {
        const topicId = req.params.topic_id;
        const topic = await topicModel.getTopic(topicId);
        const topics = await homeModel.home(); 
        const comments = await commentModel.getComments(topicId);

        res.render('topic.ejs', {topics: topics, topic: topic, comments: comments});
    },
    createTopic: async (req, res) => {
        const topics = await homeModel.home(); 
        res.render('createTopic.ejs', {topics: topics});
    },
    createNewTopic: async (req, res) => {
        const newTopicData = req.body;
        const insertId = await topicModel.createTopic(newTopicData);    

        res.redirect(`/topic/read/${insertId}`);    
    },
    deleteTopic: async (req, res) => {
        const topicId = req.params.topic_id;
        await topicModel.deleteTopic(topicId);

        res.redirect('/');
    },
    updateTopic: async (req, res) => {
        const topicId = req.params.topic_id;
        const topic = await topicModel.getTopic(topicId);
        const topics = await homeModel.home(); 
        res.render('updateTopic.ejs', {topics: topics, topic: topic});
    },
    updateNewTopic: async (req, res) => {
        const newTopicData = req.body;
        const topicId = req.params.topic_id;
        await topicModel.updateTopic(newTopicData, topicId);   

        res.redirect(`/topic/read/${topicId}`);
    }
}