const singleCategory = (state = [], action) => {
    if (action.type === "GET_POSTS_BY_CATEGORY") {
      return action.payload;
    }
    return state;
  };
  
  export default singleCategory;