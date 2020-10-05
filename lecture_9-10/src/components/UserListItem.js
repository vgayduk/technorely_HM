import React from "react";
import "./UserListItem.css";

export default function UserListItem(props) {
  return (
    <li className="user-item">
      <img src={props.logo} alt="avatar" />
      <p className="login">{props.login}</p>
      <p className="url">
        <span>Visit: </span>
        <a href={props.url}>{props.url}</a>
      </p>
    </li>
  );
}
