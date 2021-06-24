import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from './Game'
import Navbar from './Navbar';
import Score from './Score';
import Shortcuts from './Shortcuts';
import {questionAnswer, changeQuiz, submit, initQuizzes,timer,startTimer } from './redux/actions'

class App extends React.Component {

  constructor(props){
    super(props);
    this.iniciaJuego = this.iniciaJuego.bind(this)
    
  }
   
  render(){
    
      
  return ( this.props.finished === true ? <Score score = {this.props.score} iniciaJuego = {this.iniciaJuego} ></Score> : <div className = "App">
        
  <Navbar time ={this.props.time}/>
  <div className = "Game">
  <Game quiz= {this.props.quizzes[this.props.currentQuiz]}
        currentQuiz = {this.props.currentQuiz}
        onQuestionAnswer = {(answer) =>{
     this.props.dispatch(questionAnswer(this.props.currentQuiz, answer))
   }}
   nextQuestion = {this.nextQuestion}
   previousQuestion = {this.previousQuestion}
   quizzLength = {this.props.quizzes.length}
   submitAnswers = {this.submitAnswers}
   iniciaJuego = {this.iniciaJuego}
   
   
  />

    <div className = "aside">
    <Shortcuts quizzes = {this.props.quizzes} 
            jumpToQuiz = {this.jumpToQuiz}
  
     ></Shortcuts>
    </div>

  </div>
  
  
  
  
</div> 
          
      

      

  );

        


        }

        nextQuestion = () =>{
          this.props.dispatch(changeQuiz(this.props.currentQuiz + 1))
        }

        previousQuestion = () =>{
          this.props.dispatch(changeQuiz(this.props.currentQuiz - 1))
        }

        jumpToQuiz = (index) =>{
          this.props.dispatch(changeQuiz(index))
        }

        submitAnswers = () =>{
          this.props.dispatch(submit(this.props.quizzes))

        }
        
        empezarTimer = () =>{
              this.props.dispatch(startTimer())
        }

        conteo(){
          return setInterval(() => {
              if(this.props.time > 0){
                  this.props.dispatch(timer());
              } else {
                  this.submitAnswers();
              }
          }, 1000)
      }
        async askQuizzes (){
          const res = await fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=489d6039ada449ae4357")
          const quizzes = await res.json();
          (quizzes === "null" || quizzes.length === 0 || quizzes.length < 0) ? this.props.dispatch(initQuizzes(this.props.quizzes)):this.props.dispatch(initQuizzes(quizzes))
          this.props.dispatch(changeQuiz(0))

        }

        async iniciaJuego(){

          this.askQuizzes();
          this.props.dispatch(changeQuiz(0))
         
        }

        async componentDidMount(){
          this.conteo()
         this.empezarTimer()
          this.askQuizzes();
          this.props.dispatch(changeQuiz(0))
        }
        
      


        

}






  function mapStateToProps(state) {
  return {
  ...state
  };
}

export default connect(mapStateToProps)(App);