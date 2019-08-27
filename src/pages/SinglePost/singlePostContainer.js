import { connect } from "react-redux";
import getSinglePost from "./singlePostAction";
import SinglePost from "./SinglePost";

const stateToProps = state => {
  return {
    user: state.user,
    singlePost: state.singlePost
  };
};

export default connect(
  stateToProps,
  { getSinglePost }
)(SinglePost);