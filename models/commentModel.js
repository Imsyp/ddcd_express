const db = require('../config/db.js');

module.exports = {
    createComment: async (topicId, newCommentData) => {
        const query = 'INSERT INTO Comments(username, content, topic_id) VALUES(?, ?, ?);';
        const newComment = await db.query(query, [newCommentData.username, newCommentData.content, topicId]);

        return newComment[0];
    },
    getComments: async (topicId) => {
        const query = 'SELECT * FROM Comments WHERE topic_id=?;';
        const comments = await db.query(query, [topicId]);

        return comments[0];
    },
    deleteComment: async (commentId) => {
        const query = 'DELETE FROM Comments WHERE comment_id=?;';
        await db.query(query, [commentId]);
    },
    getComment: async (commentId) => {
        const query = 'SELECT * FROM Comments WHERE comment_id=?;';
        const comment = await db.query(query, [commentId]);

        return comment[0][0];
    }
}