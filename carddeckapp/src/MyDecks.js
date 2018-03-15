import React, { Component } from 'react';

import './css/decks.css';
import CardsStore from './CardsStore';
import DeckNode from './DeckNode';

class MyDecks extends Component {

    constructor() {
        super();

        const decknodes = [];
        let data = CardsStore.getAll();

        for (let i = 0; i < data.length; i++) {
            decknodes.push({
                name: data[i]['name'],
                description: data[i]['description']
            });
        }

        this.state = {
            decknodes
        };
    }

    render() {
        return (
            <div className="deckslist">
                <header>
                    <h1>My Cards</h1>
                </header>
                <div>
                    {this.state.decknodes.map((decknode) =>
                        (<DeckNode
                            name={decknode.name}
                            description={decknode.description}
                        />))}
                </div>
            </div>
        );
    }
}

export default MyDecks;
