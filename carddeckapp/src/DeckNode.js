import React, { Component } from 'react';

class DeckNode extends Component {

    render() {
        return (
            <div className='decknode'>
                <p>{this.props.name}</p>
                <div>
                    <p>{this.props.description}</p>
                </div>
                <button onClick={this.props.onRemove}>Delete</button>
            </div>
        );
    }
}

export default DeckNode;