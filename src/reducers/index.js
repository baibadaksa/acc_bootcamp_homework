import {combineReducers} from "redux";
import isRegistered from "./registration";
import getErrors from "./error";
import addPost from "./compose";
import posts from "./allPosts";
import singlePost from "./singlePost";
import {user}  from "./login";

const rootReducer = combineReducers({
    isRegistered,
    getErrors,
    user,
    addPost,
    posts,
    singlePost
});

export default rootReducer;