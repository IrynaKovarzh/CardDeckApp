import React, { Component } from 'react';

import './css/decks.css';

import Input from './UI/Input/Input';

class NewDeck extends Component {

    state = {
        deckForm: {
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
        //loading: false
    }

    inputChangedHandler(event, inputIdentifier) {
        const updatedDeckForm = {
            ...this.state.deckForm
        };
        const updatedFormElement = {
            ...updatedDeckForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedDeckForm[inputIdentifier] = updatedFormElement;
        this.setState({ deckForm: updatedDeckForm });
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
                    </form>
                </div>
            </div>
        );
    }
}

export default NewDeck;