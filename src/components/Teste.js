import React, { Component } from 'react'

export default class Teste extends Component {

    constructor(props){
        super(props)
        this.state  = { dadosApi: [] }
    }

    componentDidMount(){

        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then((response)=> response.json())
        .then((data)=>{this.setState({ dadosApi: data.drinks })})
    }

    render() {
        return (
            <div>
                <ol>{this.state.dadosApi.map((item) => <li>{item.strDrink}</li>)}</ol>
            </div>
        )
    }
}
