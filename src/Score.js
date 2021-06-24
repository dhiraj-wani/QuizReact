import React, { Component } from 'react'
import Button from './Button'

export default class Score extends Component {
    render() {
        return (
            <div className = "score">
                <h1> Su Puntuación es de : {this.props.score}</h1>
               
                <Button name = {"Volver a Jugar"} click = {this.props.iniciaJuego}></Button>

            </div>
        )
    }
}
