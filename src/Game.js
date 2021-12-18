import React from "react";
import Player from './components/player.component/Player'
import './game-style.css'
import './media.css'
import Dice from './components/dice.component/Dice.component'
import Button from './components/buttons.component/button.component'
import FinalScore from './components/finalSccoreConfiguration/finalScoreConfiguration'
export default class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      player1: {
        id: 1,
        currentScore: 0,
        globalScore: 0
      },
      player2: {
        id: 2,
        currentScore: 0,
        globalScore: 0
      },
      firstPlayerTurn: true,
      winningScore: 100,
    }
  }
  sumOfDices = (firstDice, secondDice) => {
    const player = this.state.firstPlayerTurn ? "player1" : "player2";
    if (firstDice === 6 && secondDice === 6) {
      return this.setState((preState) => ({
        [player]: {
          ...preState[player],
          currentScore: 0,
        },
        firstPlayerTurn: !(preState.firstPlayerTurn)
      })
      )
    } else {
      return this.setState((preState) => ({
        [player]: {
          ...preState[player],
          currentScore: preState[player].currentScore + firstDice + secondDice,
        },
      })
      )
    }
  }

  hold = () => {
    const player = this.state.firstPlayerTurn ? "player1" : "player2";
    this.setState((PreState) => ({
      [player]: {
        ...PreState[player],
        globalScore: (PreState[player].globalScore + PreState[player].currentScore),
        currentScore: 0,
      },
      firstPlayerTurn: !PreState.firstPlayerTurn
    }), ()=> {
      console.log(this.state[player].globalScore)
      console.log(this.state.winningScore)
      if (this.state[player].globalScore >= this.state.winningScore) {
        alert(`${player} Wins!`)
        this.newGame()
      }
    })
  }

  newGame = () => {
    const players = ['player1','player2']
    players.forEach(player => {
      this.setState((PreState) => ({
        [player]: {
          ...PreState[player],
          currentScore: 0,
          globalScore: 0,
        },
        firstPlayerTurn: !(PreState.firstPlayerTurn)
      })
      )  
    })
  }
  getOutput = (e) => {
    const winningScore = e.target.previousElementSibling.value
    this.setState({
      winningScore : winningScore
    },()=>{console.log(this.state.winningScore)})
}

  render() {
    return (
      <>
        <div className="white-background"></div>
        <div className="new-game-container">
        < Button text="New Game" getClick={this.newGame}/>
        <div className='game-turns'>
          {/* <span>Turn: {this.state.firstPlayerTurn ?  'Player 1' : 'Player 2'}</span> */}
        </div>
        </div>
        <div className="container">
          <div className="game">
            < Player turn={this.state.firstPlayerTurn} id={this.state.player1.id} currentScore={this.state.player1.currentScore} globalScore={this.state.player1.globalScore} />
            < Player turn={!this.state.firstPlayerTurn} id={this.state.player2.id} currentScore={this.state.player2.currentScore} globalScore={this.state.player2.globalScore} />
          </div>
        </div>
        <div className='game-setting'>
        < Dice sum={this.sumOfDices} hold={this.hold} />
        <FinalScore label="Final Score: " getOutput={this.getOutput}/>
        </div>
      </>
    );
  }
}


