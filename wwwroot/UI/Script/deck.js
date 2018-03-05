function Deck(cardsAmount) {
  var cardsHTML = "";

  if(!cardsAmount) {}; //to set default? leave an empty? or show a message?

  for(var i = 0; i < cardsAmount; i++) {
    var card = Card();
    cardsHTML += card;
  }

  return cardsHTML;
}