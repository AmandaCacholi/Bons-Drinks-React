import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {

  return (
    <>
      <label htmlFor={props.name} className="inputLabel">
        {props.children}
      </label>
      <input
        onChange={props.change}
        type={props.type}
        name={props.name}
        id={props.id}
        className="inputText"
      />
    </>
  );
};

export default Input
