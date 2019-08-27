import axios from "axios";

const getSinglePost = postId => dispatch => {
  axios
  .get(`/posts/${postId}`)
  .then(response => {
    if(response && response.status === 200){
        dispatch({
          type: "GET_POST",
          payload: response.data
    });
    }
  })
  };
  
  export default getSinglePost;