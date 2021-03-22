import React from "react";
import "./Form.css";
import Input from "../Input/Input";
import imgContato from "../assets/images/contact-pic.jpg";
import Button from "../Button/Button";

const Form = (props) => {
  return (
    <div className="containerContato">
      <h1 className="tituloContato">Contato</h1>
      <img src={imgContato} className="imgContato"></img>
      <form
        className="formContato"
      >
        <div className="labelWrapper">
          <Input
            name="inputNome"
            type="text"
            id="inputNome"
          >
            Nome:
          </Input>
        </div>
        <div className="labelWrapper">
          <Input
            name="InputEmail"
            type="text"
            id="inputEmail"
          >
            E-mail:
          </Input>
        </div>
        <div>
          <label className="inputLabel">Mensagem:</label>
          <textarea className="textArea"></textarea>
          <br></br>
        </div>
        <div className="btnWrapper">
          <div className="button">
            <Button>Enviar</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
