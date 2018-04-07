import React, { Component } from 'react';

import './css/decks.css';

import Card from './Card';

class Deck extends Component {

    render() {
        const deckdata = this.props.data;

        let deck =
            (<div>
                <p>It is an empty deck.</p>
            </div>);

        if (deckdata) {  //has a value
            const cards = deckdata['cards'];

            if (cards) {
                const cardsAmount = cards.length;
                if (cardsAmount) { //to set default? leave an empty? or show a message?

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

                    let k = 0;
                    deck = (<div className="deck-container">
                        {
                            cards.map((card, index) => (
                                <Card
                                    cardIndex={index}
                                    backImage={deckdata['back-image']}
                                    frontImage={card['front-image']}
                                    key={k++}
                                />
                            ))
                        }
                    </div>);
                }
            }
        }

        return (
            <div>
                {deck}
            </div>
        );
    }
}

export default Deck;