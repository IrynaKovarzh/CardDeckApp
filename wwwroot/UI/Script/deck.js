var deckdata = data[0];

function Deck() {
  var cardsHTML = "";

  var cardsAmount = deckdata.cards.length;

  if (!cardsAmount) { } //to set default? leave an empty? or show a message?

 //to shaffle data
  var cards = deckdata.cards;

  //Fisher yates shuffle
  var i = cards.length;
  if (i == 0) return;
  while (--i) {
    var j = Math.floor(Math.random() * (i + 1));
    if (i != j) {
      var tempi = cards[i];
      var tempj = cards[j];
      cards[j] = tempi;
      cards[i] = tempj;
    }
  }

  deckdata.cards = cards;

  for (var i = 0; i < cardsAmount; i++) {
    var card = Card(i);
    cardsHTML += card;
  }

  return cardsHTML;
}