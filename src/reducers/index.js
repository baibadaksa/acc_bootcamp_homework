import {combineReducers} from "redux";
import isRegistered from "./registration";
import getErrors from "./error";
import addPost from "./compose";
import posts from "./allPosts";
import singlePost from "./singlePost";
import singleCategory from "./singleCategory";
import comments from "./comments";
import {user}  from "./login";

const rootReducer = combineReducers({
    isRegistered,
    getErrors,
    user,
    addPost,
    posts,
    singlePost,
    singleCategory,
    comments
});

export default rootReducer;