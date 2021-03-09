import React, { Component } from 'react'
import './Input.css'

export default class Input extends Component {

    constructor(props){
        super(props)
        this.change = this.change.bind(this)
    }

    change(event){
        console.log(event.target.value)
    }

    render() {
        return (
            <>
                <label htmlFor={this.props.name} className="inputLabel">{this.props.children}</label>
                <input type="text" name={this.props.name} onChange={this.change} className="inputText"/>
            </>
        )
    }
}
