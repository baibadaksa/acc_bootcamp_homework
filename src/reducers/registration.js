const isRegistered = (state = false, action) => {
    if (action.type === "REGISTRATION_SUCCESS") {
      return action.payload;
    }
    return state;
  };
  
  export default isRegistered;