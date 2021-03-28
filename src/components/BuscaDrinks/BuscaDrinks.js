import React, { useEffect, useState } from "react";
// import { req } from "../../Models/requisicao";
import Button from "../Button/Button";
import { CardDrinks } from "../CardDrinks/CardDrinks";
import Input from "../Input/Input";
import "./BuscaDrinks.css";

export const BuscaDrinks = () => {
  const [busca, setBusca] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handlerChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlerClick = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
    );
    const dados = await response.json();
    const tudo = dados.drinks.map((item) =>
      <CardDrinks img={item.strDrinkThumb} nome={item.strDrink} />
    );
      setBusca(tudo)
  };

  return (
    <>
      <section className="buscaDrinks">
        <div className="buscaDrinks__search">
          <div className="buscaDrinks__input">
            <Input change={handlerChange} />
          </div>
          <div className="buscaDrinks__btn">
            <Button click={handlerClick}>Pesquisar</Button>
          </div>
        </div>
        <div className="buscaDrinks__cards" >{busca}</div>
      </section>
    </>
  );
};
