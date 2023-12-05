const commentModel = require('../models/commentModel.js');

module.exports = {
    createComment: async (req, res) => {
        const topicId = req.params.topic_id;
        const newCommentData = req.body;
        const newComment = await commentModel.createComment(topicId, newCommentData);

        //res.redirect(`/topic/read/${topicId}`);
        res.json({ commentId: newComment.insertId });
    },
    deleteComment: async (req, res) => {
        const commentId = req.params.comment_id;    

        // const comment = await commentModel.getComment(commentId);  
        await commentModel.deleteComment(commentId);    

        // res.redirect(`/topic/read/${comment.topic_id}`); 더이상 redirect를 할 필요가 없어짐
        res.json({success: true});
    }
}