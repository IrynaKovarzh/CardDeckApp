import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DeckNode extends Component {

    render() {
        return (
            <div className='decknode'>
                <Link to={"/gameboard/" + this.props.id} >{this.props.name}</Link>
                <div>
                    <p>{this.props.description}</p>
                </div>
                <button onClick={this.props.onRemove}>Delete</button>
            </div>
        );
    }
}

export default DeckNode;