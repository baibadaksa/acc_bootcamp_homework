const posts = (state = [], action) => {
    console.log("this is action payload from reducer:" + action.payload);
    if (action.type === "GET_ALL_POSTS") {
      return action.payload;
    }
    return state;
  };
  
  export default posts;