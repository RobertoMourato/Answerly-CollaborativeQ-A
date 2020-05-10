/**
 * Event listeners
 */

function addEventListeners() {
    let search = document.querySelector('#start_search');
    if (search != null) {
        search.addEventListener('keypress', sendSearchRequest);
    }

    let questionCreator = document.querySelector('#add_question_btn');
    if (questionCreator != null) {
        questionCreator.addEventListener('click', sendCreateQuestionRequest);
    }

    let answerCreator = document.querySelector('div.form-group .btn.my-2.my-sm-0');
    if (answerCreator != null)
        answerCreator.addEventListener('click', sendCreateAnswerRequest);

    let commentCreator = document.querySelector('#comment-button');
    if (commentCreator != null)
        commentCreator.addEventListener('click', sendCreateCommentRequest);

    let subcommentCreators = document.querySelectorAll('#subcomment-button');
    [].forEach.call(subcommentCreators, function(creator) {
        creator.addEventListener('click', sendCreateSubCommentRequest);
    });

    let answerDeleters = document.querySelectorAll('#delete_answer');
    [].forEach.call(answerDeleters, function(deleter) {
        deleter.addEventListener('click', sendDeleteAnswerRequest);
    });

    let commentDeleters = document.querySelectorAll('#delete_comment');
    [].forEach.call(commentDeleters, function(deleter) {
        deleter.addEventListener('click', sendDeleteCommentRequest);
    });

    let questionDeleters = document.querySelectorAll('#delete_question');
    [].forEach.call(questionDeleters, function(deleter) {
        deleter.addEventListener('click', sendDeleteQuestionRequest);
    });

    let questionEditor = document.querySelector('#edit_question');
    if (questionEditor != null) {
        questionEditor.addEventListener('click', sendEditQuestionRequest);
        questionEditor.addEventListener('click', hideEditQuestion);
    }

    let questionUpdator = document.querySelector('#save_question');
    if (questionUpdator != null) {
        questionUpdator.addEventListener('click', sendUpdateQuestionRequest);
        questionUpdator.addEventListener('click', hideUpdateQuestion);
    }

    let questionLike = document.querySelector('#like1');
    if (questionLike != null)
        questionLike.addEventListener('click', QuestionLikeQ);

    let questionLikeP = document.querySelector('#like1P');
    if (questionLikeP != null)
        questionLikeP.addEventListener('click', QuestionLikeQ);

    let questionDislike = document.querySelector('#dislike1');
    if (questionDislike != null)
        questionDislike.addEventListener('click', QuestionDislikeQ);

    let questionDislikeP = document.querySelector('#dislike1P');
    if (questionDislikeP != null)
        questionDislikeP.addEventListener('click', QuestionDislikeQ);        
    
    let questionLike2 = document.querySelector('#like2');
    if (questionLike2 != null)
        questionLike2.addEventListener('click', QuestionLikeA);
            
    let questionDislike2 = document.querySelector('#dislike2');
    if (questionDislike2 != null)
        questionDislike2.addEventListener('click', QuestionDislikeA);


    let homeLike = document.querySelectorAll('#like3');
    if (homeLike != null)
    [].forEach.call(homeLike, function(homeL) {
        homeL.addEventListener('click', homeLikeF);
    });   

    let homeDislike = document.querySelectorAll('#dislike3');
    if (homeDislike != null)
        [].forEach.call(homeDislike, function(homeD) {
            homeD.addEventListener('click', homeDislikeF);
        });    

    let homeLike3 = document.querySelectorAll('#like3P');
    if (homeLike3 != null)
        [].forEach.call(homeLike3, function(homeL3) {
            homeL3.addEventListener('click', homeLikeF);
        });   

    let homeDislike3 = document.querySelectorAll('#dislike3P');
    if (homeDislike3 != null)
        [].forEach.call(homeDislike, function(homeD3) {
            homeD3.addEventListener('click', homeDislikeF);
        }); 

    let answerEditors = document.querySelectorAll('.edit_answer_btn');
    if (answerEditors != null)
        [].forEach.call(answerEditors, function(editor) {
            editor.addEventListener('click', sendEditAnswerRequest);
            editor.addEventListener('click', hideEditAnswer);
        });

    let answerUpdators = document.querySelectorAll('.save_answer_btn');
    if (answerUpdators != null)
        [].forEach.call(answerUpdators, function(updator) {
            updator.addEventListener('click', sendUpdateAnswerRequest);
            updator.addEventListener('click', hideUpdateAnswer);
        });

    let commentEditors = document.querySelectorAll('.edit_comment_btn');
    if (commentEditors != null)
        [].forEach.call(commentEditors, function(editor) {
            editor.addEventListener('click', sendEditCommentRequest);
            editor.addEventListener('click', hideEditComment);
        });

    let commentUpdators = document.querySelectorAll('.save_comment_btn');
    if (commentUpdators != null)
        [].forEach.call(commentUpdators, function(updator) {
            updator.addEventListener('click', sendUpdateCommentRequest);
            updator.addEventListener('click', hideUpdateComment);
        });

    let labelAdder = document.getElementById('add_label');
    if (labelAdder != null)
        labelAdder.addEventListener('click', sendAddLabelRequest);

    // following questions

    let followQuestions = document.querySelectorAll('#followH');
    if (followQuestions != null)
        [].forEach.call(followQuestions, function(follower) {
            follower.addEventListener('click', sendFollowRequestH);
        });

    let followQuestion2 = document.querySelector('#followQ');
    if (followQuestion2 != null)
        followQuestion2.addEventListener('click', sendFollowRequestQ);

    
    let unfollowQuestions = document.querySelectorAll('#unfollowH');
    if (unfollowQuestions != null)
        [].forEach.call(unfollowQuestions, function(follower) {
            follower.addEventListener('click', sendUnfollowRequestH);
        });

    let unfollowQuestion2 = document.querySelector('#unfollowQ');
    if (unfollowQuestion2 != null)
        unfollowQuestion2.addEventListener('click', sendUnfollowRequestQ);
    

}


/**
 * Ajax functions
 */

function encodeForAjax(data) {
    if (data == null) return null;
    return Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');
}

function sendAjaxRequest(method, url, data, handler) {
    let request = new XMLHttpRequest();
    request.open(method, url, true);
    request.setRequestHeader('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').content);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.addEventListener('load', handler);
    request.send(encodeForAjax(data));
}


/**
 * Handlers 
 */

function showSearchHandler() {
    console.log(this.responseText);
    let info = JSON.parse(this.responseText);

    console.log(info);

    if (this.status == 200) window.location = '/search/' + info.KeyWord;

    //addEventListeners();
}

function questionAddedHandler() {

    let info = JSON.parse(this.responseText);

    // Reset the new answer input
    document.getElementById("formControlTextareaQuestion").value = "";
    document.getElementById("formControlTextareaDescription").value = "";

    // Create the new Question
    let new_question = createQuestion(info);

    let section = document.getElementById("questions-list");

    let list = document.getElementById("questions-list");

    section.before(new_question, list.childNodes[0]);

    // Focus on adding a new question
    new_question.focus();

    sendCreateLabelsRequest(info[4]);

}

function answerAddedHandler() {

    //In case of user not logged in
    if (this.status == 403) {
        let older_alert = document.getElementById('alert_answer');
        if (older_alert != null)
            return;

        let new_alert = createAlert("answer");

        let section = document.getElementById("add_answer_form");
        let list = document.getElementById("add_answer_form");

        section.insertBefore(new_alert, list.childNodes[0]);

        return;
    }

    //Parse info
    let info = JSON.parse(this.responseText);

    // Create the new Answer
    let new_answer = createAnswer(info);

    // Reset the new answer input
    document.getElementById("exampleFormControlTextarea1").value = "";

    //Get elements
    let section = document.getElementById("answers-list");
    let list = document.getElementById("answers-list");

    //Add new answer
    section.insertBefore(new_answer, list.childNodes[0]);

    // Focus on adding a new answer
    new_answer.focus();

    addEventListeners();

}

function commentAddedHandler() {

    //In case of user not logged in
    if (this.status == 403) {
        let older_alert = document.getElementById('alert_comment');
        if (older_alert != null)
            return;

        let new_alert = createAlert("comment");

        let section = document.getElementById("add_comment_form");
        let list = document.getElementById("add_comment_form");

        section.insertBefore(new_alert, list.childNodes[0]);

        return;
    }

    //Parse info
    let info = JSON.parse(this.responseText);

    // Create the new Comment
    let new_comment = createComment(info);

    // Reset the new comment input
    document.getElementById("exampleFormControlTextarea2").value = "";

    //Get elements
    let section = document.getElementById("comments-list");
    let list = document.getElementById("comments-list");

    //Add new comment
    section.insertBefore(new_comment, list.childNodes[0]);

    // Focus on adding a new comment
    new_comment.focus();

    addEventListeners();
}

function subCommentAddedHandler() {

    //In case of user not logged in
    if (this.status == 403) {
        let older_alert = document.getElementById('alert_comment');
        if (older_alert != null)
            return;

        let new_alert = createAlert("comment");

        let section = document.getElementById("add_comment_form");
        let list = document.getElementById("add_comment_form");

        section.insertBefore(new_alert, list.childNodes[0]);

        return;
    }

    //Parse info
    let info = JSON.parse(this.responseText);

    // Create the new Comment
    let new_comment = createComment(info);

    // Reset the new comment input
    document.getElementById("exampleFormControlTextarea3").value = "";

    //Get elements
    let section = document.getElementById("subcomments-list");
    let list = document.getElementById("subcomments-list");

    //Add new comment
    section.insertBefore(new_comment, list.childNodes[0]);

    // Focus on adding a new comment
    new_comment.focus();

    addEventListeners();
}

function answerDeletedHandler() {
    let answer = JSON.parse(this.responseText);
    let li = document.querySelector('li#answer' + answer.id + '[data-id="' + answer.id + '"]');
    li.remove();
}

function commentDeletedHandler() {
    let comment = JSON.parse(this.responseText);
    let div = document.querySelector('div#comment' + comment.id + '[data-id="' + comment.id + '"]');
    div.remove();
}

function questionDeletedHandler() {
    if (this.status == 200) window.location = '/';
    let question = JSON.parse(this.responseText);
    let div = document.querySelector('div#question-div[data-id="' + question.id + '"]');
    div.remove();
}

function questionEditedHandler() {
    let info = JSON.parse(this.responseText);

    // Edit Question
    let new_title = editTitle(info);
    let new_description = editDescription(info);

    let div_title = document.querySelector("div#question-div h1");
    let div_description = document.querySelector("div#question-div #question_description");

    div_title.innerHTML = new_title.innerHTML;
    div_description.innerHTML = new_description.innerHTML;

    // Focus 
    new_title.focus();
    new_description.focus();

    addEventListeners();
}

function answerEditedHandler() {
    let info = JSON.parse(this.responseText);

    // Edit Answer
    let new_content = editAnswerContent(info);
    let div_content = document.querySelector("ul#answers-list #answer" + info[3] + " #answer_content");
    div_content.outerHTML = new_content.innerHTML;

    // Focus
    new_content.focus();

    addEventListeners();
}

function commentEditedHandler() {
    let info = JSON.parse(this.responseText);

    // Edit comment
    let new_content = editCommentContent(info);
    let div_content = document.querySelector("#comment" + info[3] + " div #comment_content");
    div_content.outerHTML = new_content.innerHTML;

    // Focus
    new_content.focus();

    addEventListeners();
}

function questionUpdatedHandler() {
    let info = JSON.parse(this.responseText);

    // Update question
    let new_title = updateTitle(info);
    let new_description = updateDescription(info);

    let div_title = document.querySelector("div#question-div #question_title");
    let div_description = document.querySelector("div#question-div #question_description");

    div_title.outerHTML = new_title.innerHTML;
    div_description.outerHTML = new_description.innerHTML;

    // Focus 
    new_title.focus();
    new_description.focus();

    addEventListeners();
}

function answerUpdatedHandler() {
    let info = JSON.parse(this.responseText);

    // Update answer
    let new_content = updateAnswerContent(info);
    let div_content = document.querySelector("ul#answers-list #answer" + info[3] + " #answer_content");
    div_content.outerHTML = new_content.innerHTML;

    // Focus 
    new_content.focus();

    addEventListeners();
}

function commentUpdatedHandler() {
    let info = JSON.parse(this.responseText);

    // Update answer
    let new_content = updateCommentContent(info);
    let div_content = document.querySelector("#comment" + info[3] + " div #comment_content");
    div_content.outerHTML = new_content.innerHTML;

    // Focus 
    new_content.focus();

    addEventListeners();
}

function labelStartedHandler() {
    let new_content = startLabel();
    let plus = document.getElementById('add_label');
    plus.outerHTML = new_content.innerHTML;

    // Focus
    plus.focus();

    addEventListeners();
}


/**
 * Send requests
 */

function sendSearchRequest(e) {
    if (e.key === 'Enter') {
        let content = document.getElementById("start_search").value;

        console.log(content);

        if (content != '')
            sendAjaxRequest('post', 'api/search', { content: content }, showSearchHandler);

        event.preventDefault();
    }
}

function sendDeleteAnswerRequest() {
    let id = this.closest('li.answer_item').getAttribute('data-id');
    sendAjaxRequest('delete', '/api/answer/' + id, null, answerDeletedHandler);
}

function sendDeleteCommentRequest() {
    let id = this.closest('.comment').getAttribute('data-id');
    sendAjaxRequest('delete', '/api/comment/' + id, null, commentDeletedHandler);
}

function sendDeleteQuestionRequest() {
    let id = this.closest('div#question-div').getAttribute('data-id');
    sendAjaxRequest('delete', '/api/question/' + id, null, questionDeletedHandler);
}

function sendEditQuestionRequest() {
    let id = this.closest('div#question-div').getAttribute('data-id');
    let title = document.querySelector("div#question-div h1").textContent;
    let description = document.querySelector("div#question-div #question_description").textContent;

    if (title != '' && description != '')
        sendAjaxRequest('put', '/api/question/' + id, { title: title, description: description }, questionEditedHandler);
}

function sendEditAnswerRequest() {
    let div = event.target.parentElement.parentElement.parentElement.parentElement;
    let id = div.getAttribute('data-id');
    let content = document.querySelector("ul#answers-list #answer" + id + " #answer_content").textContent;

    if (content != '')
        sendAjaxRequest('put', '/api/answer/' + id, { content: content }, answerEditedHandler);
}

function sendEditCommentRequest(event) {
    let div = event.target.parentElement.parentElement.parentElement;
    let id = div.getAttribute('data-id');
    let content = document.querySelector("#comment" + id + " div #comment_content").textContent;
    if (content != '')
        sendAjaxRequest('put', '/api/comment/' + id, { content: content }, commentEditedHandler);
}

function sendUpdateQuestionRequest() {
    let id = this.closest('div#question-div').getAttribute('data-id');
    let title = document.querySelector('input#question_title').value;
    let description = document.querySelector('div#question-div input#question_description').value;

    if (title != "" && description != "")
        sendAjaxRequest('put', '/api/question/' + id + '/update', { title: title, description: description }, questionUpdatedHandler);
}

function sendUpdateAnswerRequest() {
    let div = event.target.parentElement.parentElement.parentElement.parentElement;
    let id = div.getAttribute('data-id');
    let content = document.querySelector('ul#answers-list #answer' + id + ' input#answer_content').value;

    if (content != "")
        sendAjaxRequest('put', '/api/answer/' + id + '/update', { content: content }, answerUpdatedHandler);
}

function sendUpdateCommentRequest() {
    let div = event.target.parentElement.parentElement.parentElement;
    let id = div.getAttribute('data-id');
    let content = document.querySelector("#comment" + id + " div #comment_content").value;

    if (content != "")
        sendAjaxRequest('put', '/api/comment/' + id + '/update', { content: content }, commentUpdatedHandler);
}

function sendCreateQuestionRequest(event) {

    let title = document.getElementById("formControlTextareaQuestion").value;
    let description = document.getElementById("formControlTextareaDescription").value;

    if (title != '' && description != '')
        sendAjaxRequest('put', '/api/question', { title: title, description: description }, questionAddedHandler);

    event.preventDefault();

}

function sendCreateAnswerRequest(event) {

    let content = document.getElementById("exampleFormControlTextarea1").value;
    let question_index = this.closest('.container-fluid#question-div').getAttribute('data-id');

    if (content != '')
        sendAjaxRequest('put', '/api/answer', { content: content, question_index: question_index }, answerAddedHandler);

    event.preventDefault();

}

function sendCreateCommentRequest(event) {
    let content = document.getElementById("exampleFormControlTextarea2").value;
    let question_index = this.closest('.container-fluid#question-div').getAttribute('data-id');

    if (content != '')
        sendAjaxRequest('put', '/api/comment', { content: content, question_index: question_index }, commentAddedHandler);

    event.preventDefault();

}

function sendCreateSubCommentRequest(event) {
    let content = document.getElementById("exampleFormControlTextarea3").value;
    let answer_index = this.closest('.answer_item').getAttribute('data-id');

    if (content != '')
        sendAjaxRequest('put', '/api/comment', { content: content, answer_index: answer_index }, subCommentAddedHandler);

    event.preventDefault();

}

function sendAddLabelRequest() {
    sendAjaxRequest('put', '/api/label/', null, labelStartedHandler);
}

function sendCreateLabelsRequest(question_index) {
    let forms = document.querySelectorAll('.label_form');

    for (let i = 0; i < forms.length; i++) {
        if (forms[i] == null)
            return;
        let name = forms[i].value;

        if (name != '')
            sendAjaxRequest('post', '/api/label', { name: name, question_index: question_index });
    }
}

// following questions

function sendFollowRequestH(){
    
    let id = this.closest('#questions-list').getAttribute('data-id');
    sendAjaxRequest('put', '/api/question/' + id + '/follow', { id: id }, followRequestHandlerH);

    //changes button color
    this.style.color = '#6545c9';
    this.innerHTML = " unfollow";

}

function sendFollowRequestQ(){
    
    let id = this.closest('div#question-div').getAttribute('data-id');
    sendAjaxRequest('put', '/api/question/' + id + '/follow', { id: id }, followRequestHandlerQ);

    // changes button color
    this.style.color = '#6545c9';
    this.innerHTML = " unfollow";

}

function sendUnfollowRequestH(){
    
    let id = this.closest('#questions-list').getAttribute('data-id');
    sendAjaxRequest('put', '/api/question/' + id + '/unfollow', { id: id }, unfollowRequestHandlerH);

    // changes button color
    this.style.color = 'black';
    this.innerHTML = " follow";

}

function sendUnfollowRequestQ(){
    
    let id = this.closest('div#question-div').getAttribute('data-id');
    sendAjaxRequest('put', '/api/question/' + id + '/unfollow', { id: id }, unfollowRequestHandlerQ);

    // changes button color
    this.style.color = 'black';
    this.innerHTML = " follow";

}


/**
 * Auxiliary functions
 * @param info 
 */

function createQuestion(info) {
    let new_question = document.createElement('question');
    new_question.classList.add('question');
    new_question.setAttribute('data-id', 0);
    new_question.innerHTML = `<div id="questions-list" class="wrapper home_question container-fluid">
                                <div class="row">
                                    <div id="prof_info" class="col-3 text-center">
                                        <img src="/img/unknown.png">
                                        <p><a class="row-2 d-none d-sm-block" href="/pages/profile.php">${info[2]}</a></p>
                                    </div>
                                    <div class="col-9">
                                        <h1><a id="question-header" href="question/${info[4]}">${info[0]}</a></h1>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="icons col-9">
                                        <a class="icon" href="#">
                                        <i class="fas fa-thumbs-up fa-lg">0</i>
                                        </a>
                                        <a class="icon" href="#">
                                            <i class="fas fa-thumbs-down fa-lg">0</i>
                                        </a>
                                        <a class="icon" href="#">
                                            <i class="fas fa-reply fa-lg"> 10 </i>
                                        </a>
                                    </div>
                                    <p class="col-3" id=question_date>${info[3]}</p>
                                </div>
                            </div>`;

    return new_question;

}

function editTitle(info) {
    let new_question = document.createElement('question');
    new_question.classList.add('question');
    new_question.setAttribute('data-id', 0);
    new_question.innerHTML = `<input id="question_title" class="form-control" type="text" value="${info[0]}">`;

    return new_question;

}

function editDescription(info) {
    let new_question = document.createElement('question');
    new_question.classList.add('question');
    new_question.setAttribute('data-id', 0);
    new_question.innerHTML = `<input id="question_description" class="form-control" type="text" value="${info[1]}">`;

    return new_question;

}

function editAnswerContent(info) {
    let new_answer = document.createElement('answer');
    new_answer.classList.add('answer');
    new_answer.setAttribute('data-id', 0);
    new_answer.innerHTML = `<input id="answer_content" class="form-control" type="text" value="${info[0]}">`;

    return new_answer;
}

function editCommentContent(info) {
    let new_comment = document.createElement('comment');
    new_comment.classList.add('comment');
    new_comment.setAttribute('data-id', 0);
    new_comment.innerHTML = `<input id="comment_content" class="form-control" type="text" value="${info[0]}">`;

    return new_comment;
}

function updateTitle(info) {
    let new_question = document.createElement('question');
    new_question.classList.add('question');
    new_question.setAttribute('data-id', 0);
    new_question.innerHTML = `<h1 id="question_title">${info[0]}</h1>`;

    return new_question;
}

function updateDescription(info) {
    let new_question = document.createElement('question');
    new_question.classList.add('question');
    new_question.setAttribute('data-id', 0);
    new_question.innerHTML = `<p id="question_description">${info[1]}</p>`;

    return new_question;

}

function updateAnswerContent(info) {
    let new_question = document.createElement('question');
    new_question.classList.add('question');
    new_question.setAttribute('data-id', 0);
    new_question.innerHTML = `<p id="answer_content">${info[0]}</p>`;

    return new_question;
}

function updateCommentContent(info) {
    let new_comment = document.createElement('comment');
    new_comment.classList.add('comment');
    new_comment.setAttribute('data-id', 0);
    new_comment.innerHTML = `<p id="comment_content">${info[0]}</p>`;

    return new_comment;
}

function createAnswer(info) {
    let new_answer = document.createElement('answer');
    new_answer.classList.add('answer');
    new_answer.innerHTML = `<li id="answer${info[3]}" class="answer_item" data-id="${info[3]}">
                                <div class="row">
                                    <a class="col-sm-3 d-none d-sm-block text-center" href="../pages/profile.php">
                                        <img src="/img/unknown.png" alt="Generic placeholder image">
                                    </a>
                                    <div class="col-sm-9">
                                        <span class="badge badge-success"><i class="fas fa-star"></i>Score ${info[2]}</span>
                                        <p id="user_ans"><a href="../pages/profile.php"> ${info[1]} </a></p>
                                    </div>
                                </div>
                                <div class="ans-body">
                                    <p id="answer_content">${info[0]}</p>
                                    <div class=icons-answers>
                                        <a class="icon-answers" href="#">
                                            <i class="fas fa-thumbs-up"> 0 </i>
                                        </a>
                                        <a class="icon-answers" href="#">
                                            <i class="fas fa-thumbs-down"> 0 </i>
                                        </a>
                                        <a class="icon-answers" href="#">
                                            <i class="fas fa-comment">0</i>
                                        </a>
                                        <a class="icon-answers">
                                            <i class="fas fa-bug"> Report</i>
                                        </a>
                                        <a class="icon-answers edit_answer_btn" id="edit_answer${info[3]}">
                                            <i class="fas fa-edit"> Edit</i>
                                        </a>
                                        <a class="icon-answers save_answer_btn" id="save_answer${info[3]}">
                                            <i class="fas fa-save"> Save</i>
                                        </a>
                                        <a class="icon-answers" id="delete_answer">
                                            <i class="fas fa-trash-alt"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>`;

    return new_answer;
}

function createComment(info) {

    let new_comment = document.createElement('div');
    new_comment.setAttribute('data-id', info[3]);
    new_comment.classList.add('comment');
    new_comment.setAttribute('id', 'comment' + info[3]);
    new_comment.innerHTML = `<div>
                                <a href="profile.php" class="username">${info[1]}</a>
                                <a class="icon-comments">
                                    <i class="fas fa-bug"> Report</i>
                                </a>
                                <a class="icon-comments edit_comment_btn" id="edit_comment${info[3]}">
                                    <i class="fas fa-edit"> Edit</i>
                                </a>
                                <a class="icon-comments save_comment_btn" id="save_comment${info[3]}">
                                    <i class="fas fa-save"> Save</i>
                                </a>
                                <a class="icon-comments" id="delete_comment">
                                    <i class="fas fa-trash-alt"></i>
                                </a>
                                <br>
                                <p id="comment_content">
                                    ${info[0]}
                                </p>
                            </div>`;


    return new_comment;

}

function createAlert(type) {
    let new_alert = document.createElement('alert');
    new_alert.classList.add('alert');
    new_alert.innerHTML = ` <div id="alert_${type}" class="card text-white bg-danger">
                                <div class="card-body">
                                <p class="card-text">You have to be logged in to ${type} this question</p>
                                </div>
                            </div>`
    return new_alert;
}

function hideEditQuestion() {
    let edit_btn = document.getElementById('edit_question');
    if (edit_btn.style.display === "none") {
        edit_btn.style.display = "block";
    } else {
        edit_btn.style.display = "none";
    }
    let update_btn = document.getElementById('save_question');
    update_btn.style.display = "block";
}

function hideUpdateQuestion() {
    let update_btn = document.getElementById('save_question');
    if (update_btn.style.display === "none") {
        update_btn.style.display = "block";
    } else {
        update_btn.style.display = "none";
    }
    let edit_btn = document.getElementById('edit_question');
    edit_btn.style.display = "block";
}

function hideEditAnswer() {
    let id = event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id');
    let edit_btn = document.getElementById('edit_answer' + id);
    if (edit_btn.style.display === "none") {
        edit_btn.style.display = "contents";
    } else {
        edit_btn.style.display = "none";
    }
    let update_btn = document.getElementById('save_answer' + id);
    update_btn.style.display = "contents";
}

function hideUpdateAnswer() {
    let id = event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id');
    let update_btn = document.getElementById('save_answer' + id);
    if (update_btn.style.display === "none") {
        update_btn.style.display = "contents";
    } else {
        update_btn.style.display = "none";
    }
    let edit_btn = document.getElementById('edit_answer' + id);
    edit_btn.style.display = "contents";
}

function hideEditComment() {
    let id = event.target.parentElement.parentElement.parentElement.getAttribute('data-id');
    let edit_btn = document.getElementById('edit_comment' + id);
    if (edit_btn.style.display === "none") {
        edit_btn.style.display = "contents";
    } else {
        edit_btn.style.display = "none";
    }
    let update_btn = document.getElementById('save_comment' + id);
    update_btn.style.display = "contents";
}

function hideUpdateComment() {
    let id = event.target.parentElement.parentElement.parentElement.getAttribute('data-id');
    let update_btn = document.getElementById('save_comment' + id);
    if (update_btn.style.display === "none") {
        update_btn.style.display = "contents";
    } else {
        update_btn.style.display = "none";
    }
    let edit_btn = document.getElementById('edit_comment' + id);
    edit_btn.style.display = "contents";
}

function startLabel() {
    let start_label = document.createElement('div');
    start_label.innerHTML = `<input class="badge-dark badge-pill form-control col-sm-4 label_form" type="text" placeholder="#">
                             <a class="badge badge-dark badge-pill" id="add_label">+</a>`;

    return start_label;
}

function QuestionLikeQ() {
    let id = this.closest('div#question-div').getAttribute('data-id');
    sendAjaxRequest('put', '/api/question/' + id + '/vote', { id : id}, handleLikeQ);
}

function QuestionDislikeQ(){
    let id = this.closest('div#question-div').getAttribute('data-id');
    sendAjaxRequest('put', '/api/question/' + id + '/downvote', { id : id}, handleDislikeQ);
}

function QuestionLikeA() {
    let id = this.closest('.answer_item').getAttribute('data-id');
    sendAjaxRequest('put', '/api/answer/' + id + '/vote', { id : id}, handleLikeA);
}

function QuestionDislikeA() {
    let id = this.closest('.answer_item').getAttribute('data-id');
    sendAjaxRequest('put', '/api/answer/' + id + '/downvote', { id : id}, handleDislikeA);
}


function homeLikeF() {
    let id = this.closest('div#questions-list').getAttribute('data-id');
    sendAjaxRequest('put', '/api/question/' + id + '/vote', { id : id}, handleLikeH);
}


function homeDislikeF() {  
    console.log(event.target);
    let id = this.closest('div#questions-list').getAttribute('data-id');
    sendAjaxRequest('put', '/api/question/' + id + '/downvote', { id : id}, handleDislikeH);
}

// following questions
function followRequestHandlerH(){

    
    let info = JSON.parse(this.responseText);

    if(info[2] <= 6){

        let section = document.getElementById('sidenav_left');

        let new_following = document.createElement('following');
        new_following.classList.add('sidenav');
        new_following.innerHTML = `<a class="row" href="question/${info[1]}"> ${info[0]}</a>`;  

        section.insertBefore(new_following, section.childNodes[section.childNodes.size]);


        return new_following;

    }

}

function followRequestHandlerQ(){

    let info = JSON.parse(this.responseText);

    if(info[2] <= 6){

        let section = document.getElementById('sidenav_left');

        let new_following = document.createElement('following');
        new_following.classList.add('sidenav');
        new_following.innerHTML = `<a class="row" href="question/${info[1]}"> ${info[0]}</a>`;  

        section.insertBefore(new_following, section.childNodes[section.childNodes.size]);

        return new_following;

    }
    
}

function unfollowRequestHandlerH(){

    let info = JSON.parse(this.responseText);
    let li = document.querySelector('a.row[data-id="' + info[1] + '"]');
    if(li != null){
        li.remove();
    }


}

function unfollowRequestHandlerQ(){

    let info = JSON.parse(this.responseText);
    let li = document.querySelector('a.row[data-id="' + info[1] + '"]');
    if(li != null){
        li.remove();
    }

}

function handleLikeQ(){
    let info = JSON.parse(this.responseText);

    let buttonl = document.querySelector('#like1');
    if (buttonl === null) buttonl = document.querySelector('#like1P');

    let buttond = document.querySelector('#dislike1');
    if (buttond === null) buttonl = document.querySelector('#dislike1P');


    if (buttonl.style.color != '#6545c9')
        buttonl.style.color = '#6545c9';
    else buttonl.style.color = 'black';

    buttonl.innerHTML = ' '+ info[0];
    buttond.innerHTML = ' ' + info[1];

}

function handleDislikeQ(){
    let info = JSON.parse(this.responseText);

    let button = document.querySelector('#dislike1');
    if (button === null) button = document.querySelector('#dislike1P');

    let buttonl = document.querySelector('#like1');
    if (buttonl === null) buttonl = document.querySelector('#like1P');


    if (button.style.color != '#6545c9')
        button.style.color = '#6545c9';
    else button.style.color = 'black';

    buttonl.innerHTML = ' ' + info[0];
    button.innerHTML = ' '+ info[1];

}

function handleLikeA(){
    let info = JSON.parse(this.responseText);

    let buttonl = document.querySelector('#like2');
    if (buttonl === null) buttonl = document.querySelector('#like2P');

    let buttond = document.querySelector('#dislike2');
    if (buttond === null) buttonl = document.querySelector('#dislike2P');


    if (buttonl.style.color != '#6545c9')
        buttonl.style.color = '#6545c9';
    else buttonl.style.color = 'black';

    buttonl.innerHTML = ' '+ info[0];
    buttond.innerHTML = ' ' + info[1];

}

function handleDislikeA(){
    let info = JSON.parse(this.responseText);

    let button = document.querySelector('#dislike2');
    if (button === null) button = document.querySelector('#dislike2P');

    let buttonl = document.querySelector('#like2');
    if (buttonl === null) buttonl = document.querySelector('#like2P');


    if (button.style.color != '#6545c9')
        button.style.color = '#6545c9';
    else button.style.color = 'black';

    buttonl.innerHTML = ' ' + info[0];
    button.innerHTML = ' '+ info[1];

}

function handleLikeH(){
    let info = JSON.parse(this.responseText);

    let buttonl = document.querySelector("#questions-list[data-id='" + info[2] + "'] #like3");
    if (buttonl === null) buttonl = document.querySelector("#questions-list[data-id='" + info[2] + "'] #like3P");

    let buttond = document.querySelector("#questions-list[data-id='" + info[2] + "'] #dislike3");
    if (buttond === null) button = document.querySelector("#questions-list[data-id='" + info[2] + "'] #dislike3P");


    //if (buttonl.style.color != '#6545c9')
      //  buttonl.style.color = '#6545c9';
    //else buttonl.style.color = '#000000';

    let newL = changeLikeColor(info[0]);
    let newD = changeDislikeColor(info[1])

    buttonl.outerHTML = newL.innerHTML;
    buttond.outerHTML = newD.innerHTML;

}

function handleDislikeH(){
    let info = JSON.parse(this.responseText);

    let button = document.querySelector("#questions-list[data-id='" + info[2] + "'] #dislike3");

    if (button === null) button = document.querySelector("#questions-list[data-id='" + info[2] + "'] #dislike3P");

    let buttonl = document.querySelector("#questions-list[data-id='" + info[2] + "'] #like3");
    if (buttonl === null) buttonl = document.querySelector("#questions-list[data-id='" + info[2] + "'] #like3P");


    //if (button.style.color != '#6545c9')
      //  button.style.color = '#6545c9';
    //else button.style.color = '#000000';



    buttonl.innerHTML = ' ' + info[0];
    button.innerHTML = ' '+ info[1];

}

function changeLikeColor(nr_likes) {
    let new_like = document.createElement('like');
    new_like.innerHTML = ` <a class="icon" >
                             <i class="fas fa-thumbs-up fa-lg" id="like3P"> ${nr_likes} </i>
                            </a>`
    return new_like;
}

function changeDislikeColor(nr_dislikes) {
    let new_dislike = document.createElement('dislike');
    new_dislike.innerHTML = ` <a class="icon" >
    <i class="fas fa-thumbs-up fa-lg" id="like3P"> ${nr_dislikes} </i>
   </a>`
    return new_dislike;
}



addEventListeners();