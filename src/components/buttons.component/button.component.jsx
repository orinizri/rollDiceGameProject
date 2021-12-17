import React from 'react';

export default class Button extends React.Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <button>
                    hi
                </button>
            </div>
        )
    }
}

