import React, { Component } from 'react';

import './css/decks.css';
import CardsStore from './CardsStore';

class CardsList extends Component {

    /*   constructor() {
           super();
   
           let decknodes = [];
   
           const data = CardsStore.getAll();
           for (let i = 0; i < data.length; i++) {
               decknodes.push({
                   id: data[i]['id'],
                   name: data[i]['name'],
                   description: data[i]['description']
               });
           }
   
           this.state = {
               decknodes
           };
       }
   
   
       OpenGameHandler(index) {
           // alert("deck " + index);
           alert("deck");
           //l  this.setState({ decknodes });
       } 
   
       DeleteDeckHandler(index) {
           const decknodes = [...this.state.decknodes];
           decknodes.splice(index, 1);
           this.setState({ decknodes });
       } */

    render() {
        return (
            <div>
            </div>

            /* <div className="deckslist">
                 <header>
                     <h1>My Cards</h1>
                 </header>
                 <div>
                     <ul>
                         {this.state.decknodes.map((decknode, index) => {
                             return (
                               //  <li onClick={() => alert("deck")} >
                                     <DeckNode
                                         id={decknode.id}
                                         name={decknode.name}
                                         description={decknode.description}
                                      //  <!-- onClick={() => alert("deck")} -->
                                    //  onClick = 
 
                                         onRemove={this.DeleteDeckHandler.bind(this, index)}
                                     />
                               //  </li>
                             )
                         })}
                     </ul>
                 </div>
             </div> */
        );
    }
}

export default CardsList;
