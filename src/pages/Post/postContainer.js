import { connect } from "react-redux";
import BlogPost from "./BlogPost";
import addPost from "./postAction";

const stateToProps = state => {
  return {
    user: state.user,
    isCreated: state.addPost //---make "Redirect" to read page
  };
};

export default connect(
  stateToProps,
  { addPost }
)(BlogPost);