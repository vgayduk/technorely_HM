import React from "react";
import "./MainPage.css";
import UserListItem from "../components/UserListItem";
import { useSelector, useDispatch } from "react-redux";

export default function MainRedux() {
  let store = useSelector((store) => store);
  const dispatch = useDispatch();

  const getUsers = () => {
    const asyncGetUsers = () => {
      return () => {
        fetch("https://api.github.com/users")
          .then((response) =>
            response.ok ? response.json() : Promise.reject()
          )
          .then((response) =>
            dispatch({ type: "SET_USERS", payload: response })
          )
          .catch(() => {
            dispatch({
              type: "SET_USERS_ERROR",
              payload: "An error has occured",
            });
          });
      };
    };
    dispatch(asyncGetUsers());
  };

  if (store.type === "loading") {
    getUsers();
    return <div className="info">Loading...</div>;
  } else if (store.type === "error") {
    return <div className="info">{store.message}</div>;
  } else if (store.type === "userArray") {
    return (
      <div className="wrapper">
        <ul>
          {store.userArray.map((user, i) => {
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
