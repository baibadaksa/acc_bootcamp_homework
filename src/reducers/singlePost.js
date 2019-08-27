const singlePost = (state = {}, action) => {
    if (action.type === "GET_POST") {
      return action.payload;
    }
    return state;
  };
  
  export default singlePost;