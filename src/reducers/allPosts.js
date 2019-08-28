const posts = (state = [], action) => {
    if (action.type === "GET_ALL_POSTS") {
      return action.payload;
    }
    return state;
  };
  
  export default posts;