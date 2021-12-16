import React from "react";
import Player from './components/player.component/Player'
import './game-style.css'
import Dice from './components/dice.component/Dice.component'
import Button from './components/buttons.component/button.component'
export default class Game extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      playerScore : 0,

      players : [
        {
          id : 0,
          currentScore : 9,
          globalScore : 10
        },
        {
          id : 1,
          currentScore : 4,
          globalScore : 5
        }
        ],
      newGame : false,
      firstPlayerTurn : true,
  }
  }
sumOfDices = (a,b,player) => {
  
    return this.setState((prev) => 
      ({[this.state.players[0]['currentScore']] : prev.players[0].currentScore+1})
      )
}

  render () {
    console.log(this.state.players[0])
    return (
      <>
        <div className='game-turn'>
          <span>Turn:</span>
          {this.state.firstPlayerTurn ? 0 : 1}
        </div>
        <div className="container">
          <div className="game">
            < Player id={this.state.players[0].id} currentScore={this.state.players[0].currentScore} globalScore={this.state.players[0].globalScore} />
            < Player id={this.state.players[1].id} currentScore={this.state.players[1].currentScore} globalScore={this.state.players[1].globalScore} />
          </div>
        </div>
        <div className='game-setting'>
          <Dice callBack={this.rollDice} sum={this.sumOfDices} currentScore={this.state.players[0]}/>
          {/* <Button callBack={this.rollDice()}/> */}
        </div>
        </>
    );
}} 


