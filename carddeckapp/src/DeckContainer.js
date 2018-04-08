import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './css/decks.css';

import Button from './UI/Button/Button';

import Deck from './Deck';

class DeckContainer extends Component {

    constructor() {
        super();

        this.state = {
            lastCard: null
        };
    }

    closeHandler() {
        this.props.history.push('/mydecks');
    }

    toShuffleHandler() {
        var deckContainerElement = document.querySelector(".board .deck-container");

        var childrenList = deckContainerElement.children;
        var cardElements = [];
        for (var k = 0; k < childrenList.length; k++) {
            var element = childrenList[k].querySelectorAll(".card.not-flipped");
            if (element && element.length !== 0) {
                cardElements.push(childrenList[k]);
            }
        }

        //Fisher yates shuffle
        var i = cardElements.length;
        if (i === 0) return;
        var ddd = document.createElement("absolute-center");
        while (--i) {
            var j = Math.floor(Math.random() * (i + 1));
            if (i !== j) {
                deckContainerElement.replaceChild(ddd, cardElements[i]);
                deckContainerElement.replaceChild(cardElements[i], cardElements[j]);
                deckContainerElement.replaceChild(cardElements[j], ddd);
            }
        }

        //animation
        let lastCard = this.state.lastCard;
        if (lastCard) {
            lastCard.style.transform = 'translate3d(200%, -25%, 0) scale(0.3)';
        }

        let card;
        var cards = document.querySelectorAll(".card.not-flipped");
        if (cards.length > 0) {
            for (var l = 0; l < cards.length; l++) {
                card = cards[l];
                var toshift = 20 + l * 3;
                card.style.transform = 'translate3d(-' + toshift + '%, -' + toshift + '%, 0) scale(0.5)';
            }

            setTimeout(function () {
                for (var i = 0; i < cards.length; i++) {
                    card = cards[i];
                    var toshift = i * 3;
                    card.style.transform = 'translate3d(-' + toshift + '%, -' + toshift + '%, 0) scale(1)';
                }
            }, 800);
        }
    }

    takeCardHandler() {
        let toRender = 0;

        var lastCard = this.state.lastCard;

        var flippedCards = document.querySelectorAll(".card.flipped");
        if (flippedCards.length === 0) {
            lastCard = null;
            toRender++;
        }

        if (lastCard) {
            lastCard.style.transform = 'translate3d(200%, -25%, 0) scale(0.3)';
        }

        var cards = document.querySelectorAll(".card.not-flipped");
        if (cards.length > 0) {
            lastCard = cards[cards.length - 1];
            toRender++;

            lastCard.getElementsByClassName('back')[0].style.transform = 'rotate3d(0,1,0, 180deg)';
            lastCard.getElementsByClassName('front')[0].style.transform = 'rotate3d(0,1,0, 0deg)';
            lastCard.classList.add("flipped");
            lastCard.classList.remove("not-flipped");

            //To shift a bit a top flipped card
            lastCard.style.transform = 'translate3d(-5%, -5%, 0)';
        }

        if (toRender > 0) {
            this.setState({ lastCard });
        }
    }

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
                    deck = (<div>
                        {
                            <Deck data={deckdata} />
                        }
                    </div>);
                }
            }
        }

        return (
            <div className="deck-container">
                <div>
                    <Button clicked={this.takeCardHandler.bind(this)}>TAKE A CARD</Button>
                    <Button clicked={this.toShuffleHandler.bind(this)}>SHUFFLE</Button>
                    <Button clicked={this.closeHandler.bind(this)}>Closed</Button>
                </div>
                <div>
                    {deck}
                </div>
            </div>
        );
    }
}

export default withRouter(DeckContainer);