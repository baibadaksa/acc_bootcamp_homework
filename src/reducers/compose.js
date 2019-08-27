const addPost = (state = {}, action) => {
    if (action.type === "CREATE_POST_SUCCESS") {
      return action.payload;
    }
    return state;
  };
  
  export default addPost;