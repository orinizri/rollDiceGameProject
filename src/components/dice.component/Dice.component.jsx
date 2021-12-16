import React from 'react';
import './dice-style.css'
export default class Dice extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>dice</h3>
            </div>
        )
    }
}