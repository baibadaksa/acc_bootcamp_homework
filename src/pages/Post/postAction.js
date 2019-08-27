import axios from "axios";

const addPost = (post, userId) => async dispatch => {
    const data = new FormData(); 
    data.append('postImage', post.postImage);
    data.append('title', post.title);
    data.append('content', post.content);
    data.append('category', post.category);
    data.append('userId', userId);

    axios
    .post("/posts", data)
    .then(res => {
        if(res && res.status === 200){

        }
    })
    .catch(err => {
        console.log(err);
    })
}

export default addPost;