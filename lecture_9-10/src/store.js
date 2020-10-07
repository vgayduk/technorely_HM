import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const reducer = (state, action) => {
  if (action.type === "SET_USERS") {
    return { ...state, type: "userArray", userArray: action.payload };
  } else if (action.type === "SET_USERS_ERROR") {
    return { ...state, message: action.payload, type: "error" };
  } else if (action.type === "SET_LOADING") {
    return { ...state, type: "loading" };
  } else {
    return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch({ type: "SET_LOADING" });
