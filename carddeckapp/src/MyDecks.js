import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Button from './UI/Button/Button';

import './css/decks.css';
import CardsStore from './CardsStore';
import DeckNode from './DeckNode';
import NewDeck from './NewDeck';

class MyDecks extends Component {

    constructor() {
        super();

        let decknodes = [];

        const data = CardsStore.getAll();
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

    DeleteDeckHandler(index) {
        const decknodes = [...this.state.decknodes];
        decknodes.splice(index, 1);
        this.setState({ decknodes });

        //Delete from the DB
        CardsStore.remove(index);
        // console.log(CardsStore.getAll().length);
    }

    AddNewHandler = () => {
        this.props.history.push('/mydecks/new');
    }

    render() {
        return (
            <div className="deckslist">
                <header>
                    <h1>My Cards</h1>
                </header>
                <div>
                    {this.state.decknodes.map((decknode, index) =>
                        (<DeckNode
                            name={decknode.name}
                            description={decknode.description}
                            onRemove={this.DeleteDeckHandler.bind(this, index)}
                        />)
                    )}
                    <div>
                        <Button btnType="Success" clicked={this.AddNewHandler}>+</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MyDecks);
