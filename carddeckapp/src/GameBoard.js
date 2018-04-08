import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';

import './css/decks.css';

import CardsStore from './CardsStore';

import DeckContainer from './DeckContainer';

class GameBoard extends Component {

    render() {
        let game =
            (<div>
                <p>No such a game</p>
            </div>);

        const id = this.props.match.params.id;
        let deckdata = CardsStore.get(id);

        if (deckdata) {  //has a value
            const cards = deckdata['cards'];
            if (cards) {
                const cardsAmount = cards.length;

                //to shuffle 
                //Fisher yates shuffle
                var i = cardsAmount;
                while (--i) {
                    var j = Math.floor(Math.random() * (i + 1));
                    if (i !== j) {
                        var tempi = cards[i];
                        var tempj = cards[j];
                        cards[j] = tempi;
                        cards[i] = tempj;
                    }
                }
                deckdata['cards'] = cards;
            }
        }

        if (deckdata) {  //has a value
            game =
                (
                    <DeckContainer data={deckdata} />
                );
        }

        return (
            <div className="board">
                {game}
            </div>
        );
    }
}

export default GameBoard;
