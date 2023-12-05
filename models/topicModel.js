const db = require('../config/db.js');

module.exports = {
    getTopic: async (topicId) => {
        const query = 'SELECT * FROM Topics WHERE topic_id=?;';
        const topic = await db.query(query, [topicId]);

        return topic[0][0];
    },
    //newTopicData�� �Ű������� �޾� DB�� �����͸� �߰��� ��, �ش� �������� insertId ��ȯ
    createTopic: async (newTopicData) => {
        const query = 'INSERT INTO Topics(title, content) VALUES(?, ?);';
        const result = await db.query(query, [newTopicData.title, newTopicData.content]);
        return result[0].insertId;
    },
    deleteTopic: async (topicId) => {
        const query = 'DELETE FROM Topics WHERE topic_id=?;';
        await db.query(query, [topicId]);
    },
    updateTopic: async (newTopicData, topicId) => {
        const query = 'UPDATE Topics SET title=?, content=? WHERE topic_id=?;';
        await db.query(query, [newTopicData.title, newTopicData.content, topicId]);
    }
}