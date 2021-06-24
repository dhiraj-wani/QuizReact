import React, { Component } from 'react'
import Autor from './Autor';
import './index.css';
import ActionBar from './ActionBar';
export default class Game extends Component {
    render() {
        
        return (
            
        <div className = "Juego">
            <div className="continer">
                <div className = "CapyAuthor">
                    {this.props.quiz.attachment ?  <img src= {this.props.quiz.attachment.url} alt="Imagen" className="fotoCapital" /> : <img src = {'../public/image.jpeg'} alt="Imagen" className="fotoCapital" />}
                    <Autor quiz={this.props.quiz} />
                </div>
                
                
                
                <div className = "PreguntayInput">
                    <p className = "currentQuiz"> Question {this.props.currentQuiz + 1 }</p>
                   
                    <div className = "Pregunta">
                        {this.props.quiz.question}
                    </div>
                
                    <input  type = "text" 
                        value = {this.props.quiz.userAnswer || ''}
                        onChange = {(e) => this.props.onQuestionAnswer(e.target.value)}/>

                           
                </div>
                    

                </div>
            
            
                <div>
                <ActionBar nextQuestion = {this.props.nextQuestion}
                           previousQuestion = {this.props.previousQuestion}
                            currentQuiz = {this.props.currentQuiz}
                            lastQuiz = {this.props.quizzLength - 1}
                            submitAnswers = {this.props.submitAnswers}
                            iniciaJuego = {this.props.iniciaJuego}
                           
                        
                        
                />
                </div>
                
              


                

            </div>
        );
    }
}
