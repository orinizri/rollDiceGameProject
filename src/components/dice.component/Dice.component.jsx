import React from 'react';
import './dice-style.css';

export default class Dice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            diceOne : 0,
            diceTwo : 0,
        }
}
rollDice = () => {
    this.setState({
        diceOne : Math.floor((Math.random()*6) + 1),
        diceTwo : Math.floor((Math.random()*6) + 1)
    }, ()=> { this.props.sum(this.state.diceOne,this.state.diceTwo)})
}
    render() {
        return (
            <div>
                <div className="dice-result">{this.state.diceOne}-{this.state.diceTwo}</div>
                <button onClick={() => this.rollDice()}>Roll Dice</button>
                <button onClick={()=> this.props.hold(this.state.diceOne,this.state.diceTwo)}>hold</button>
            </div>
        )
    }
}