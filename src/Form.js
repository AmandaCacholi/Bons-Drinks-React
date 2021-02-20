import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
    render() {
        return (
            <div>
                    <div className="containerContato">
                        <h1 className="tituloContato">Contato</h1>
                        <img src="https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg" className="imgContato"></img>
                        <form className="formContato">
                            <div className="labelWrapper">
                                <label className="inputLabel">Nome:</label>
                                <input type="text" className="inputText"></input>
                            </div>
                            <div className="labelWrapper">
                                <label className="inputLabel">Email:</label>
                                <input type="text" className="inputText"></input>
                            </div>
                            <div>
                                <label className="inputLabel">Mensagem:</label>
                                <textarea className="textArea"></textarea><br></br>
                            </div>
                            <div className="btnWrapper">
                                <button className="btn">Enviar</button>
                            </div>
                        </form>
                    </div>
            </div>
        )
    }
}
