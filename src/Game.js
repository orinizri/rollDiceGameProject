import React from "react";
import Player from './components/player.component/Player'
import './game-style.css'
import Dice from './components/dice.component/Dice.component'

export default class Game extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      player1 : {
          id : 1,
          currentScore : 0,
          globalScore : 0
        },
        player2 : {
          id : 2,
          currentScore : 0,
          globalScore : 0
        },
      newGame : false,
      firstPlayerTurn : true,
  }
  }
sumOfDices = (a,b) => {
  const player = this.state.firstPlayerTurn ? "player1" : "player2";
  console.log(a,b)
  if (a === 6 && b ===6) {
    return this.setState((PreState) => ({
      [player] : {
        ...PreState[player],
        currentScore : 0,

      },
      firstPlayerTurn : !(PreState.firstPlayerTurn)
    })
    )
  } else {
    return this.setState((PreState) => ({
      [player] : {
        ...PreState[player],
        currentScore : PreState[player].currentScore+a+b,
      },
    })
    )
  }
}
hold = () => {
  const player = this.state.firstPlayerTurn ? "player1" : "player2";
  this.setState((PreState) => ({
    [player] : {
      ...PreState[player],
      globalScore : (PreState[player].globalScore+PreState[player].currentScore),
      currentScore : 0,
    },
    firstPlayerTurn : !PreState.firstPlayerTurn
  })
  )

}
  render () {
    return (
      <>
        <div className='game-turn'>
          <span>Turn:</span>
          {this.state.firstPlayerTurn ? 1 : 2}
        </div>
        <div className="container">
          <div className="game">
            < Player id={this.state.player1.id} currentScore={this.state.player1.currentScore} globalScore={this.state.player1.globalScore} />
            < Player id={this.state.player2.id} currentScore={this.state.player2.currentScore} globalScore={this.state.player2.globalScore} />
          </div>
        </div>
        <div className='game-setting'>
          < Dice sum={this.sumOfDices} hold={this.hold}/>
        </div>
        </>
    );
}} 


