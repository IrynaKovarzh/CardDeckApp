import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './css/decks.css';

import Button from './UI/Button/Button';

import CardsStore from './CardsStore';

import Deck from './Deck';

class GameBoard extends Component {

    closeHandler() {
        this.props.history.push('/mydecks');
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
