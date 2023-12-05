const db = require('../config/db.js');

/*
async function home() {
    const query = 'SELECT * FROM Topics;';  //���̺� �߰��� ��ҵ� �б�(*�� ��ü ����� �ǹ�)
    const topics = await db.query(query);
}
*/

//�� �Լ��� ��� ���·� �ۼ�
module.exports = {
    home: async() => {
        const query = 'SELECT * FROM Topics;';  
        const topics = await db.query(query);

        return topics[0];
    }
}

