import { connect } from "react-redux";
import getAllPosts from "./allPostsAction";
import allPosts from "./allPosts";

const stateToProps = state => {
  return {
    user: state.user,
    posts: state.posts
  };
};

export default connect(
  stateToProps,
  { getAllPosts }
)(allPosts);