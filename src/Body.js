import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Form from './Form'
import './Body.css'

export default class Body extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Form/>
                <Footer/>
            </div>
        )
    }
}
