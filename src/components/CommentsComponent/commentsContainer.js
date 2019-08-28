import { connect } from "react-redux";
import Comments from "./Comments";
import { getComments, addComment } from "./commentsAction";

const stateToProps = state => {
  return {
    user: state.user,
    comments: state.comments
  };
};

export default connect(
  stateToProps,
  { getComments, addComment }
)(Comments);