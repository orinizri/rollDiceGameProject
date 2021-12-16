import React from 'react';
import './player-style.css'
export default class Player extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="player">
                    <span>{this.props.id}</span>
                    <span>{this.props.currentScore}</span>
                    <span>{this.props.globalScore}</span>
                </div>
            </div>
        )
    }
}
