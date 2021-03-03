import React, { Component } from 'react'
import './Button.css'

export default class Button extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <button className="btn" id={this.props.id}>{this.props.children}</button>
            </div>
        )
    }
}
