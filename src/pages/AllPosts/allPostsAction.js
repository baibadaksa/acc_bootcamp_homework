import axios from "axios";

const getAllPosts = () => dispatch => {
  axios
  .get("/posts")
  .then(response => {
    if(response && response.status === 200){
        dispatch({
          type: "GET_ALL_POSTS",
          payload: response.data
    });
    }
  })
  };
  
  export default getAllPosts;

