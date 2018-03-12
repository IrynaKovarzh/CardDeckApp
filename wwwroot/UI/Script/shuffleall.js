function shuffleall(form) {

    //To flip back all flipped cards
    var flippedCards = form.querySelectorAll(".card.flipped");
    if (flippedCards.length > 0) {
        for (var i = 0; i < flippedCards.length; i++) {
            card = flippedCards[i];

            card.getElementsByClassName('back')[0].style.transform = 'rotate3d(0,1,0, 0deg)';
            card.getElementsByClassName('front')[0].style.transform = 'rotate3d(0,1,0, 180deg)';

            card.classList.add("not-flipped");
            card.classList.remove("flipped");
        }
    }

    //To move all in one deck
    var cards = form.querySelectorAll(".card.not-flipped");
    if (cards.length > 0) {
        var myVar = setTimeout(function () {
            for (var i = 0; i < cards.length; i++) {
                card = cards[i];
                card.style.transform = 'translate3d( 0%, 0%, 0) scale(1)';
            }
        }, 800);
    }

    //to shuffle
    shuffle(form);
}