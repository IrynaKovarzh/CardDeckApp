import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './css/decks.css';

import Input from './UI/Input/Input';
import Button from './UI/Button/Button';

import CardsStore from './CardsStore';

class Deck extends Component {

    constructor() {
        super();

        const deckForm = {
            name: {
                inputtype: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: ''
            },

            description: {
                inputtype: 'input',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Description'
                },
                value: ''
            }
        }

        this.state = {
            deckForm
            //loading: false
        }
    }

    inputChangedHandler(event, inputIdentifier) {
        const updatedDeckForm = this.state.deckForm;
        const updatedFormElement = updatedDeckForm[inputIdentifier];
        updatedFormElement.value = event.target.value;
        updatedDeckForm[inputIdentifier] = updatedFormElement;
        this.setState({ deckForm: updatedDeckForm });
    }

    saveHandler() {
        //Validation
        //at least: Name and 1 card

        //Add to the DB
        const deck = {
            'name': this.state.deckForm.name.value,
            'description': this.state.deckForm.description.value,

            'back-image': 'Images/BackTexture1.png',
            'cards': []
        };
        CardsStore.add(deck);

        //come back to My Cards list, that should be (re)rendered
        this.props.history.push('/mydecks');
    }

    cancelHandler() {
        this.props.history.push('/mydecks');
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.deckForm) {
            formElementsArray.push({
                id: key,
                config: this.state.deckForm[key]
            });
        }

        return (
            <div className="deck">
                <header>
                    <h1>New Deck</h1>
                </header>
                <div>
                    <form>
                        {formElementsArray.map(formElement =>
                            (<Input
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                changed={(event) => this.inputChangedHandler(event, formElement.id)}
                            />
                            ))}
                        <Button btnType="Success" clicked={this.saveHandler.bind(this)}>Save</Button>
                        <Button btnType="Danger" clicked={this.cancelHandler.bind(this)}>Cancel</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Deck);