import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './css/decks.css';

import Button from './UI/Button/Button';

import CardsStore from './CardsStore';

import Deck from './Deck';

class GameBoard extends Component {

    constructor() {
        super();

        var lastCard = null;

        this.state = {
            lastCard
        };
    }

    closeHandler() {
        this.props.history.push('/mydecks');
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
            toRender++;
        }

        var cards = document.querySelectorAll(".card.not-flipped");
        if (cards.length > 0) {
            lastCard = cards[cards.length - 1];

            lastCard.getElementsByClassName('back')[0].style.transform = 'rotate3d(0,1,0, 180deg)';
            lastCard.getElementsByClassName('front')[0].style.transform = 'rotate3d(0,1,0, 0deg)';
            lastCard.classList.add("flipped");
            lastCard.classList.remove("not-flipped");

            //To shift a bit a top flipped card
            lastCard.style.transform = 'translate3d(-5%, -5%, 0)';
            toRender++;
        }

        if (toRender > 0) {
            this.setState({ lastCard });
        }
    }

    render() {
        let game =
            (<div>
                <p>No such a game</p>
            </div>);

        const id = this.props.match.params.id;
        const deckdata = CardsStore.get(id);
        if (deckdata) {  //has a value
            game =
                (
                    <Deck data={deckdata} />
                );
        }

        return (
            <div>
                <div>
                    <Button clicked={this.takeCardHandler.bind(this)}>TAKE A CARD</Button>
                    <Button clicked={this.closeHandler.bind(this)}>Closed</Button>
                </div>
                <div className="board">
                    {game}
                </div>
            </div>
        );
    }
}

export default withRouter(GameBoard);
