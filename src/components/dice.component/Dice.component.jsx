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
            diceAnimation: false,
        }
}
rollDice = () => {
    console.log(this.state.diceAnimation)
    this.setState((preState)=>({
        diceOne : Math.floor((Math.random()*6) + 1),
        diceTwo : Math.floor((Math.random()*6) + 1),
    }), ()=> { this.props.sum(this.state.diceOne,this.state.diceTwo)})
    
    console.log(this.state.diceAnimation)
}
    render() {

        console.log(this.state.diceAnimation)
        return (
            <div>
                <div className="dice-result">
                    <span><i className={`fas fa-dice-${Object.keys(this.state.diceToIcon)[this.state.diceOne-1]}`}></i></span>
                    <span><i className={`fas fa-dice-${Object.keys(this.state.diceToIcon)[this.state.diceTwo-1]}`}></i></span>
                </div>
                <button onClick={() => {this.rollDice()}}>Roll Dice</button>
                <button onClick={()=> this.props.hold(this.state.diceOne,this.state.diceTwo)}>Hold</button>
            </div>
        )
    }
}