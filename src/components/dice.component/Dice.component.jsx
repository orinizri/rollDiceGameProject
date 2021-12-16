import React from 'react';
import './dice-style.css'
export default class Dice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            diceOne : 0,
            diceTwo : 0,
        }
}
rollDice = () => {
    this.setState(() => ({
        diceOne : Math.floor((Math.random()*6) + 1),
        diceTwo : Math.floor((Math.random()*6) + 1)
    }))
}

componentDidMount = () => {
    this.rollDice()
    
}
    render() {
        return (
            <div>
                {this.state.diceOne}-{this.state.diceTwo}
                {/* <button onClick={this.rollDice}></button> */}
                <button onClick={(e) => this.props.sum(this.state.diceOne,this.state.diceTwo,this.props.currentScore)}></button>
            </div>
        )
    }

}