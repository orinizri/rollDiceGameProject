import React from 'react';
import './player-style.css'
export default class Player extends React.Component {

    render() {
        return (
            <div>
                <div className={`player ${this.props.turn ? 'players-turn' : null}`}>
                    <span>Player: {this.props.id}</span>
                    <span>Current Score: {this.props.currentScore}</span>
                    <span>Final Score: {this.props.globalScore}</span>
                </div>
            </div>
        )
    }
}
