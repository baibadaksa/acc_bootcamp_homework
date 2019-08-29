const logout = () => dispatch => {
    dispatch({
      type: "LOGOUT"
    });
    localStorage.clear();
  };
  
  export default logout;