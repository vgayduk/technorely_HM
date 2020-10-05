import React from "react";
import { Link } from "react-router-dom";
import "./RedirectButton.css";

export default function RedirectButton(props) {
  return (
    <Link className="redirect-button" to={props.linkTo}>
      {props.title}
    </Link>
  );
}
