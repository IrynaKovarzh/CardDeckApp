import React, { Component } from 'react';

import './css/decks.css';

import Input from './UI/Input/Input';

class NewDeck extends Component {
    /*
        state = {
            name: '',
            description: ''
        } */

    render() {        
        return (
            <div className="deck">
                <header>
                    <h1>New Deck</h1>
                </header>
                <div>
                    <form>                   
                    <Input inputtype="input" type="text" name="name" placeholder="Name" />
                    <Input inputtype="textarea" type="textarea" name="description" placeholder="Description" />
                    </form>
                </div>
            </div>
        );        
    }l
}

export default NewDeck;