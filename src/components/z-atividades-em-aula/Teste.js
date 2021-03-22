import React, { useState, useEffect, createElement } from "react";
import { Card } from "./Card";

const Teste = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setDados(data.drinks[0]);
      });
  }, []);

  // const handleClick = () => {
  //   // window.location.reload()

  //   let div = document.getElementById("div")
  //   let titulo = document.createElement("h1")
  //   div.appendChild(titulo)

  //   titulo.innerText = dados

  //   let btn = document.createElement("button")
  //   div.appendChild(btn)
  //   btn.innerHTML = "Atualiza"

  //   btn.addEventListener("click", () => {
  //     window.location.reload()
  //   })
  // }

  return (
    <div id="div">
      {/* <button
        onClick={handleClick}
      >Sorteio</button> */}
      {/* <h1>{dados}</h1> */}
      <Card img={dados.strDrinkThumb} titulo={dados.strDrink} />
    </div>
  );
};

export default Teste;
