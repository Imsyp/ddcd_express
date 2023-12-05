const homeModel = require('../models/homeModel.js'); 

module.exports = {
    getTopics: async (req, res) => {
        const topics = await homeModel.home(); 
        res.render('home.ejs', {topics: topics});  
    }
}