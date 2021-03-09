import React, { Component } from "react";
import "./Pessoa.css";

export default class Pessoa extends Component {
  render() {
    return (
      <div className="containerPessoa">
        <img src={this.props.foto} className="imgPessoa" />
        <div className="nomeDescricao">
          <h3 className="nomePessoa">{this.props.nome}</h3>
          <p className="descricaoPessoa">{this.props.descricao}</p>
        </div>
      </div>
    );
  }
}
