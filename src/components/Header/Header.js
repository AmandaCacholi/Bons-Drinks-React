import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    
    render() {
        return (
                <header>
                    <nav className="menuNav">
                        <Link className="menuItem" to="/drinks">Drinks</Link>
                        <Link className="menuItem" to="/sobre">Sobre nós</Link>
                        <Link className="menuItemLogo" to="/">Bons Drinks</Link>
                        <Link className="menuItem" to="/time">Nosso time</Link>
                        <Link className="menuItem" to="/contato">Contato</Link>
                    </nav>
                </header>
        )
    }
}
