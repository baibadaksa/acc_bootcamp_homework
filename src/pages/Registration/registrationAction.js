import axios from "axios";

const registerUser = user => dispatch => {
    axios
    .post("/register", user)
    .then(response => {
        if (response && response.status === 200) {
          dispatch({
            type: "REGISTRATION_SUCCESS",
            payload: true
          })
        }
      })
      .catch(err => {
          dispatch({
            type: "GET_ERRORS",
            payload: err.response.data
          })
      });
  };
  
  export { registerUser };