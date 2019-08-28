import { connect } from "react-redux";
import getPostsByCategory from "./singleCategoryAction";
import SingleCategory from "./SingleCategory";

const stateToProps = state => {
  return {
    user: state.user,
    singleCategory: state.singleCategory
  };
};

export default connect(
  stateToProps,
  { getPostsByCategory }
)(SingleCategory);