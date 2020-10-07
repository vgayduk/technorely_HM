import React, { useState, useEffect } from "react";
import "./MainPage.css";
import UserListItem from "../components/UserListItem";

export default function MainGlobalState() {
  let [userList, setUserList] = useState([]);
  let [isLoaded, setIsLoaded] = useState(false);
  let [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((response) => {
        setIsLoaded(true);
        setUserList(response);
      })
      .catch(() => {
        setIsLoaded(true);
        setError(true);
      });
  }, []);

  if (error) {
    return <div className="info">An error has occured</div>;
  } else if (!isLoaded) {
    return <div className="info">Loading...</div>;
  } else if (userList) {
    return (
      <div className="wrapper">
        <ul>
          {userList.map((user, i) => {
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
