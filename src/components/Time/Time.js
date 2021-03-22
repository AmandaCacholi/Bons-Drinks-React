import React, { Component } from "react";
import Pessoa from "../Pessoa/Pessoa";
import "./Time.css";
import imgAmanda from "../assets/images/amanda.jpg";
import imgWoman1 from "../assets/images/natalie.jpg";
import imgWoman2 from "../assets/images/jenny.jpg";
import imgMan1 from "../assets/images/man1.jpg";

const Time = () => {
    return (
      <div className="containerTime">
        <h1 className="timeTitulo">Nosso time</h1>
        <Pessoa
          foto={imgAmanda}
          nome="Amanda Cacholi"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim consequat lacus consectetur tempus nec sit amet tellus. Nam nec justo lacus. Sed sit."
        ></Pessoa>
        <Pessoa
          foto={imgWoman1}
          nome="Natalie Wynn"
          descricao="Augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo."
        ></Pessoa>
        <Pessoa
          foto={imgWoman2}
          nome="Jenny Nicholson"
          descricao="Integer nec felis sodales, sagittis dolor non, congue libero. Morbi nec fringilla ipsum, ac finibus ligula. Praesent quis iaculis mi, a iaculis odio. Cras quis"
        ></Pessoa>
        <Pessoa
          foto={imgMan1}
          nome="Thiago Santos"
          descricao="Nunc varius arcu tortor, sit amet rutrum urna facilisis id. Mauris mattis in massa et condimentum. Proin dui leo, volutpat sed turpis a, malesuada commodo."
        ></Pessoa>
      </div>
    );
}

export default Time