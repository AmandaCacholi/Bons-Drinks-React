import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="menuNav">
                        <a href="#" className="menuItem">Drinks</a>
                        <a href="#" className="menuItem">Sobre nós</a>
                        <a href="#" className="menuItemLogo">Bons Drinks</a>
                        <a href="#" className="menuItem">Nosso time</a>
                        <a href="#" className="menuItem">Contato</a>
                    </nav>
                </header>
            </div>
        )
    }
}
