import React from "react";
import "./CardDrinks.css";

export const CardDrinks = (props) => {
  return (
    <div className="cardDrinks">
      <img src={props.img} className="cardDrinks__img" />
      <p className="cardDrinks__nome">{props.nome}</p>
    </div>
  );
};
