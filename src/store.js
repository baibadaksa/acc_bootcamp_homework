import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { composeWithDevTools} from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const savedUser = localStorage.getItem("user");
const id = localStorage.getItem("userId");
if(savedUser) {
    store.dispatch({
        type: "LOGIN_SUCCESS",
        payload: { 
            token: savedUser,
            userId: id
        }
    })
}

export default store;