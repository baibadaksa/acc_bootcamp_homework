import axios from "axios";

const loginUser = user => dispatch => {
  axios
    .post("/login", user)
    .then(response => {
      if (response && response.status === 200) {
        const { token } = response.data;
        const userInfo = response.data.user;
        localStorage.setItem("user", token);
        localStorage.setItem("userId", userInfo._id);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { token, userInfo }
        });
      }
    })
    .catch(err => {
    dispatch({
      type: "GET_ERRORS",
      payload: err.response.data
    })
    });

}

export { loginUser };