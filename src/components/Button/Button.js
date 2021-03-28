import React, { Component } from "react";
import "./Button.css";

const Button = (props) => {
  return <button className="btn" onClick={props.click} >{props.children}</button>;
};

export default Button