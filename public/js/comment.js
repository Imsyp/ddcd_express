const deleteComment = async (commentId) => {
    const targetComment = document.getElementById(commentId);
    const url = `/comment/delete/${commentId}`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if(res.ok) {
        targetComment.remove();
    }
}

const onCreateComment = async (topic_id) => {
    const usernameInput = document.getElementById('comment-username');
    const contentInput = document.getElementById('comment-content');

    const url = `/comment/create/${topic_id}`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: usernameInput.value, content: contentInput.value})
    });

    if(res.ok) {
        const { commentId } = await res.json();
        displayComment(usernameInput.value, contentInput.value, commentId);   //���ΰ�ħ ���� comment�� ȭ�鿡 ����
        usernameInput.value = '';   //username �Է�ĭ ����
        contentInput.value = '';    //content �Է�ĭ ����
    }
}

/*
<div class="comment-div">
    <div>
            <p><b><%= comment.username %></b></p>
            <p><%= comment.content %></p>
    </div>
    <form action="/comment/delete/<%= comment.comment_id %>" method="post">
        <button>Delete</button>
    </form>
</div>
*/

const displayComment = (username, content, commentId) => {
    const commentContainer = document.createElement('div');
    commentContainer.className = 'comment-div';
    commentContainer.id = commentId;
    const commentContent = document.createElement('div');

    const usernameP = document.createElement('p');
    usernameP.innerHTML = `<b>${username}</b>`;

    const contentP = document.createElement('p');
    contentP.innerText = content;

    commentContent.appendChild(usernameP);
    commentContent.appendChild(contentP);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.onclick = () => deleteComment(commentId);    //deleteComment �Լ� ���

    commentContainer.appendChild(commentContent);
    commentContainer.appendChild(deleteBtn);

    //���� ȭ�鿡 �ݿ�
    const commentWrapper = document.querySelector('.comment-container');
    commentWrapper.appendChild(commentContainer);
}