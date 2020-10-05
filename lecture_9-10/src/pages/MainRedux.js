import React from "react";
import "./MainPage.css";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import UserListItem from "../components/UserListItem";

const reducer = (state = [], action) => {
  if (action.type === "SET_USERS") {
    return { type: "userArray", userArray: action.payload };
  } else if (action.type === "SET_USERS_ERROR") {
    return {
      message: action.payload,
      type: "error",
    };
  } else if (action.type === "SET_LOADING") {
    return {
      type: "loading",
    };
  }
  return state;
};

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch({ type: "SET_LOADING" });

store.subscribe(() => {
  console.log(store.getState());
  MainRedux();
});

const getUsers = () => {
  const asyncGetUsers = () => {
    return () => {
      let request = fetch("https://api.github.com/users");
      request
        .then((response) => (response.ok ? response.json() : Promise.reject()))
        .then((response) =>
          store.dispatch({ type: "SET_USERS", payload: response })
        )
        .catch(() => {
          store.dispatch({
            type: "SET_USERS_ERROR",
            payload: "An error has occured",
          });
        });
    };
  };
  store.dispatch(asyncGetUsers());
};

getUsers();

export default function MainRedux() {
  console.log("inside main");
  if (store.getState().type === "loading") {
    return <div>Loading...</div>;
  } else if (store.getState().type === "error") {
    return <div className="info">An error has occured</div>;
  } else if (store.getState().type === "userArray") {
    return (
      <div className="wrapper">
        <ul>
          {store.getState().userArray.map((user, i) => {
            return (
              <UserListItem
                logo={user.avatar_url}
                login={user.login}
                url={user.html_url}
                key={i}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
