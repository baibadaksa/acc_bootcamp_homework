import { connect } from "react-redux";
import logout from "./AppAction";
import App from "./App";

const stateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  stateToProps,
  { logout }
)(App);