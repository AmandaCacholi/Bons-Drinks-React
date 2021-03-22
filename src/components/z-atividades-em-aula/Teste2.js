import React, { Component } from 'react'

export default class Teste2 extends Component {

    constructor(){
        super()
        console.log("Construido")
    }

    componentDidMount(){
        console.log("Montado")
    }

    componentWillUnmount(){
        console.log("Destruido")
    }

    render() {

        console.log("Renderizado")
        return (
            <div>
                
            </div>
        )
    }
}
