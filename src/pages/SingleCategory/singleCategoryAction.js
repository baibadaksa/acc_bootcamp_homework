import axios from "axios";

const getPostsByCategory = categoryName => dispatch => {
  axios
  .get(`/posts/category/${categoryName}`)
  .then(response => {
    if(response && response.status === 200){
        dispatch({
          type: "GET_POSTS_BY_CATEGORY",
          payload: response.data
    });
    }
  })
  };
  
  export default getPostsByCategory;