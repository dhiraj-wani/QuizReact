import React, { Component } from 'react'
import Shortcut from './Shortcut'

export default class Shortcuts extends Component {
    render() {
        return (
            <div className = "Shortcuts" >
                {this.props.quizzes.map((quizz,index) => {
                    
                    return <Shortcut   index = {index} 
                                     jumpToQuiz = {() => this.props.jumpToQuiz(index)}
                    ></Shortcut>
                })}
            </div>
        )
    }
}
