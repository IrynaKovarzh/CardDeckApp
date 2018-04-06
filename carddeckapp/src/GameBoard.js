import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from './UI/Button/Button';

class GameBoard extends Component {

    closeHandler() {
        this.props.history.push('/mydecks');
    }

    render() {
        return (
            <div className="gameBoard">
                <header>
                    <h1>Game Board</h1>
                </header>
                <div>
                    <p>Game ID:  {this.props.match.params.id}</p>
                    <Button clicked={this.closeHandler.bind(this)}>Closed</Button>
                </div>
            </div>
        );
    }
}

export default withRouter(GameBoard);
