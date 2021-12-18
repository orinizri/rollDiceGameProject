import React from 'react';
import './dice-style.css';

export default class Dice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            diceOne : 0,
            diceTwo : 0,
            diceToIcon : {
                one : 1,
                two : 2,
                three : 3,
                four : 4,
                five : 5,
                six : 6,
            },
            diceAnimation: true,

        }
}
rollDice = () => {
    this.setState({
        diceOne : Math.floor((Math.random()*6) + 1),
        diceTwo : Math.floor((Math.random()*6) + 1),
        diceAnimation: true
    }, ()=> { this.props.sum(this.state.diceOne,this.state.diceTwo)})
}
    render() {
        return (
            <div>
                <div className="dice-result">
                    <span><i className={`fas fa-dice-${Object.keys(this.state.diceToIcon)[this.state.diceOne-1]} ${(this.state.diceAnimation ? "roll-dices":'')}`}></i></span>
                    <span><i className={`fas fa-dice-${Object.keys(this.state.diceToIcon)[this.state.diceTwo-1]} ${(this.state.diceAnimation ? "roll-dices":'')}`}></i></span>
                </div>
                <button onClick={() => {this.rollDice()}} onAnimationEnd={() => this.setState({ diceAnimation: false })}>Roll Dice</button>
                <button onClick={()=> this.props.hold(this.state.diceOne,this.state.diceTwo)}>Hold</button>
            </div>
        )
    }
}