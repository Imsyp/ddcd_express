const db = require('../config/db.js');

/*
async function home() {
    const query = 'SELECT * FROM Topics;';  //테이블에 추가한 요소들 읽기(*는 전체 출력을 의미)
    const topics = await db.query(query);
}
*/

//위 함수를 모듈 형태로 작성
module.exports = {
    home: async() => {
        const query = 'SELECT * FROM Topics;';  
        const topics = await db.query(query);

        return topics[0];
    }
}

