import React, { Component } from "react";
import "./Input.css";

const change = (e) => {
  console.log(e.target.value);
};

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.name} className="inputLabel">
        {props.children}
      </label>
      <input
        type="text"
        name={props.name}
        id={props.id}
        onChange={change}
        className="inputText"
      />
    </>
  );
};

export default Input;
