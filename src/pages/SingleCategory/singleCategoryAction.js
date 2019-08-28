import axios from "axios";

const getPostsByCategory = categoryName => dispatch => {
  axios
  .get(`/posts/category/${categoryName}`, request => {
      console.log(request.params);
  })
  .then(response => {
    if(response && response.status === 200){
        console.log(response.data);
        dispatch({
          type: "GET_POSTS_BY_CATEGORY",
          payload: response.data
    });
    }
  })
  };
  
  export default getPostsByCategory;