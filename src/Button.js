

import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (

        <button disabled={this.props.disabled} onClick={this.props.click} >{this.props.name}</button>
        )
    }
}
