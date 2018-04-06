import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from './UI/Button/Button';

import CardsStore from './CardsStore';

class GameBoard extends Component {

    closeHandler() {
        this.props.history.push('/mydecks');
    }

    render() {
        let game;

        const id = this.props.match.params.id;
        const deckdata = CardsStore.get(id);
        if (deckdata) {  //has a value
            game =
                (<div>
                    <p>{deckdata.name}</p>
                </div>);
        } else {
            game =
                (<div>
                    <p>No such a game</p>
                </div>);
        }

        return (
            <div className="gameBoard">
                <header>
                    <h1>Game Board</h1>
                </header>
                <div>
                    {game}
                    <Button clicked={this.closeHandler.bind(this)}>Closed</Button>
                </div>
            </div>
        );

    }
}

export default withRouter(GameBoard);
