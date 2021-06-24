import React, { Component } from 'react'

export default class Shortcut extends Component {
    render() {
        return (
            <div>
                <button onClick = {this.props.jumpToQuiz}>{this.props.index +1}</button>
            </div>
        )
    }
}
