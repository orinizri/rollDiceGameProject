import React from 'react';

export default class Button extends React.Component {
    
    render() {
        return (
            <div>
                <button onClick={this.props.getClick}>
                    {this.props.text}
                </button>
            </div>
        )
    }
}

