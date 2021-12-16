import React from "react";
import Player from './components/player.component/Player'
import './game-style.css'
export default class Game extends React.Component {
  constructor(props){
    super(props)

    this.state = {

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
      firstPlayerTurn : false,
  }

  }


  render () {
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
          <div>Dice</div>
        </div>
        </>
    );
}} 


