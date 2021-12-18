import React from 'react';



export default class FinalScore extends React.Component {

    
    render() {
        return (
            <div className="final-score-section">
                <label>{this.props.label}</label>
                <input defaultValue="100" htmlFor={this.props.label}/>
                <button type="submit" onClick={(e) => this.props.getOutput(e)}>Submit</button>
            </div>
        )
    }
}

