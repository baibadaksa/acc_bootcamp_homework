    
import { connect } from "react-redux";
import Registration from "./Registration";
import { registerUser } from "./registrationAction";

const mapStateToProps = state => ({
  user: state.user,
  isRegistered: state.isRegistered
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Registration);