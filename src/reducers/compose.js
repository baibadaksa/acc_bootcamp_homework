const addPost = (state = false, action) => {
    if (action.type === "ADD_POST") {
      return action.payload;
    }
    return state;
  };
  
  export default addPost;