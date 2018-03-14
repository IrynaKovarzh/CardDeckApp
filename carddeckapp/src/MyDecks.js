import React, { Component } from 'react';
import './css/decks.css';

let decks = null;
decks = (
    <div id="decklist">
        <div className='decknode'>
            <p>Dragons</p>
            <div>
                <p>To test...</p>
            </div>
        </div>
    </div>
);

class MyDecks extends Component {
    render() {
        return (
            <div className="deckslist">
                <header>
                    <h1>My Cards</h1>
                </header>
                {decks}
            </div>
        );
    }
}

export default MyDecks;
