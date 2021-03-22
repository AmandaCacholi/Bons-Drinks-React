import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [entrada, setEntrada] = useState("")

  const change = (e) => {
    setEntrada(e.target.value)
    console.log(entrada)
  }

  return (
    <>
      <label htmlFor={props.name} className="inputLabel">
        {props.children}
      </label>
      <input
        value={entrada}
        onChange={change}
        type={props.type}
        name={props.name}
        id={props.id}
        className="inputText"
      />
    </>
  );
};

export default Input;
