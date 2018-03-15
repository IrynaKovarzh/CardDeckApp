import React, { Component } from 'react';

class DeckNode extends Component {
    render() {
        return (
            <div className='decknode'>
                <p>{this.props.name}</p>
                <div>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default DeckNode;