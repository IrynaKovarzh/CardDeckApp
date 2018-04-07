import React, { Component } from 'react';

import './css/decks.css';

import Card from './Card';

class Deck extends Component {

    render() {
        const deckdata = this.props.data;
        const cards = deckdata['cards'];

        //to shaffle
        /*  const cardsAmount = cards.length;
  
          if (!cardsAmount) { return; } //to set default? leave an empty? or show a message?
  
          //Fisher yates shuffle
          var i = cardsAmount;
          //if (i == 0) return;
          while (--i) {
              var j = Math.floor(Math.random() * (i + 1));
              if (i !== j) {
                  var tempi = cards[i];
                  var tempj = cards[j];
                  cards[j] = tempi;
                  cards[i] = tempj;
              }
          } 
          deckdata['cards'] = cards; */

        let k = 0;

        return (
            <div className="deck-container">
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
            </div>
        );
    }
}

export default Deck;