import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Teste4 = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((response) => response.json())
      .then((data) => {
        setDados(data.drinks[0]);
      });
  }, []);

  return (
      <>
        {dados.map((key, id) => {
            if (id < 10) {
                return (
                    <Link to={`/drinks/${key.idDrink}`}>
                        {dados.strDrink}
                    </Link>
                )
            }
        })}

      </>
    ) 

 
};
