import React from "react";
import "./Pessoa.css";

const Pessoa = (props) => {
  return (
    <div className="containerPessoa">
      <img src={props.foto} className="imgPessoa" />
      <div className="nomeDescricao">
        <h3 className="nomePessoa">{props.nome}</h3>
        <p className="descricaoPessoa">{props.descricao}</p>
      </div>
    </div>
  );
};

export default Pessoa