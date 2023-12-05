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
        displayComment(usernameInput.value, contentInput.value, commentId);   //새로고침 없이 comment를 화면에 갱신
        usernameInput.value = '';   //username 입력칸 공백
        contentInput.value = '';    //content 입력칸 공백
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
    deleteBtn.onclick = () => deleteComment(commentId);    //deleteComment 함수 등록

    commentContainer.appendChild(commentContent);
    commentContainer.appendChild(deleteBtn);

    //실제 화면에 반영
    const commentWrapper = document.querySelector('.comment-container');
    commentWrapper.appendChild(commentContainer);
}