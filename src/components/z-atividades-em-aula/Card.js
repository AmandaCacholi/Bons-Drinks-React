import React from 'react'
import './Card.css'

export const Card = (props) => {
    return (
        <div className="card" >
            <div class="card2">
                <img className="imgCard" src={props.img} />
                <p className="tituloCard" >{props.titulo}</p>
            </div>
        </div>
    )
}
