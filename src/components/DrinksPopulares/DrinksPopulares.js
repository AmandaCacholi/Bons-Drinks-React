import React, { useEffect, useState } from 'react'
import { CardDrinks } from '../CardDrinks/CardDrinks'
import './DrinksPopulares.css'

export const DrinksPopulares = () => {

    const [dadosApi1, setDadosApi1] = useState([])
    const [dadosApi2, setDadosApi2] = useState([])
    const dadosApi = [...dadosApi1, ...dadosApi2]

    const req = async () => {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
        const dados = await response.json()
        setDadosApi1(dados.drinks)

        const response2 = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        const dados2 = await response2.json()
        setDadosApi2(dados2.drinks)
    }
    useEffect(()=> req(), [])

    const drinks = ["Bloody Mary", "Caipirinha", "Caipirissima", "Dry Martini", "Gin and Soda", "Manhattan", "Martini", "Mojito", "Munich Mule", "Old Fashioned"]

    const drinksPop = []
    for(let i = 0; i <= drinks.length; i++){
        dadosApi.map((item, index) => item.strDrink == drinks[i]? drinksPop.push(<CardDrinks img={item.strDrinkThumb} nome={item.strDrink} copo={item.strGlass} key={index} />): null)
    }

    return (
        <div className="drinksPopulares" >
            {drinksPop}
        </div>
    )
}
