const Tweeter1 = function () {

    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = function () {
        let postCounter = 0
        for (post of _posts) {
            if (post.id.slice(1) > postCounter) {
                postCounter = post.id.slice(1)
            }
        }
        return postCounter
    }


    let commentIdCounter = function () {
        let commentCounter = 0
        for (post of _posts) {
            for (comment of post.comments) {
                if (comment.id.slice(1) > commentCounter) {
                    commentCounter = comment.id.slice(1)
                }
            }
        }
        return commentCounter
    }


    let getPosts = function () {
        return _posts
    }

    let addPost = function (txt) {
        _posts.push(
            {
                text: txt,
                id: "p" + (Number(postIdCounter()) + 1),
                comments: []
            }
        )
    }

    let removePost = function (postID) {
        for (post in _posts) {
            if (_posts[post].id == postID) {
                _posts.splice(post, 1)
            }
        }
    }

    let addComment = function (postID, txt) {
        for (post of _posts) {
            if (post.id == postID) {
                post.comments.push({ id: "c" + (Number(commentIdCounter()) + 1), text: txt })
            }
        }
    }

    let removeComment = function (postId, commentId) {
        for (post of _posts) {
            if(post.id == postId){
                for( comment of post.comments){
                    if(comment.id == commentId){
                        post.comments.splice(post.comments.indexOf(comment, 1))
                    }
                }
            }
        }
    }

    // let removeComment = function(postID, commentID){
    //     for(post of _posts){
    //         if(post.id == postID){
    //             for(comment of post.comments){
    //                 if(comment.id == commentID){
    //                     post.comments.splice(post.comments.indexOf(comment, 1))
    //                 }
    //             }
    //         }
    //     }
    // }

    return {
        postIdCounter: postIdCounter,
        commentIdCounter: commentIdCounter,
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}



const tweeter = Tweeter1()
console.log(tweeter.postIdCounter())
console.log(tweeter.commentIdCounter())
console.log(tweeter.getPosts())
tweeter.addPost("Some text")
console.log(tweeter.getPosts())
tweeter.addComment("p2", "yo this is another comment")
console.log(tweeter.getPosts())
tweeter.removeComment("p2","c7")
console.log(tweeter.getPosts())











