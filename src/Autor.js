import React, { Component } from 'react'


export default class Autor extends Component {
    render() {
         
        return (
            <div className ="Autor">
                Created by:  {this.props.quiz.author ? this.props.quiz.author.username : "no tiene autor"   }
                {this.props.quiz.author ? <img src = {this.props.quiz.author.photo.url} className = "fotoAuthor"/>: "No hay foto"}
            </div>
        )
    }
}
