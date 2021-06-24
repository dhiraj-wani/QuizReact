import React, { Component } from 'react'
import Button from './Button'

export default class ActionBar extends Component {
    render() {
        return (
            <div className ="ActionBar">
                <Button name = {"RESET"} click = {this.props.iniciaJuego}></Button>
                <Button name = {"SUBMIT"} click = {this.props.submitAnswers}></Button>
                <Button name = {"PREVIOUS"}  click = {this.props.previousQuestion} disabled = {this.props.currentQuiz === 0 ? true : false}></Button>
                <Button name = {"NEXT"} click = {this.props.nextQuestion} disabled = {this.props.lastQuiz === this.props.currentQuiz ? true : false}></Button>
                
            </div>
        )
    }
}
