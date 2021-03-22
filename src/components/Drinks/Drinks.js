import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { BuscaDrinks } from "../BuscaDrinks/BuscaDrinks";
import { DrinksPopulares } from "../DrinksPopulares/DrinksPopulares";
import "./Drinks.css";

export const Drinks = () => {
  return (
    <section className="drinks">
      <h1 className="drinks__titulo">Drinks</h1>
      <nav className="drinks__nav">
        <NavLink className="drinks__nav__btn" to="/drinks/populares">
          Drinks populares
        </NavLink>
        <NavLink className="drinks__nav__btn" to="/drinks/buscar">
          Buscar Drinks
        </NavLink>
      </nav>

      <Switch>
        <Route path="/drinks/populares">
          <DrinksPopulares />
        </Route>
        <Route to="/drinks/buscar">
          <BuscaDrinks />
        </Route>
      </Switch>
    </section>
  );
};
