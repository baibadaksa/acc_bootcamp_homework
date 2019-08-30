import axios from "axios";

const getComments = postId => dispatch => {
  axios
  .get(`/comments/${postId}`)
  .then(response => {
    if(response && response.status === 200){
        dispatch({
          type: "GET_COMMENTS",
          payload: response.data
    });
    }
  })
  };

  const addComment = (text, userId, postId) => dispatch =>{
    axios
    .post("/comments", {text, userId, postId})
    .then(response => {
      if(response && response.status === 200){
              dispatch({
                type: "CREATE_COMMENT",
                payload: response.data
              });
      }
    })
    .catch(err => {
      console.log("Comment was not created");
    })

  }
  
  export { getComments, addComment};