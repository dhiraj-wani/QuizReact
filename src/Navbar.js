import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className = "navBar">
            <nav > QUIZ game  </nav>
             {this.props.time}
            
                </div>
        )
    }
}
