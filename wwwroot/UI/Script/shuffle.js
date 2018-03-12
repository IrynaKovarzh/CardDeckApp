function shuffle(form) {

    var deckContainerElement = form.querySelector(".board .deck-container");

    var childrenList = deckContainerElement.children;
    var cardElements = [];
    for (var k = 0; k < childrenList.length; k++) {
        var element = childrenList[k].querySelectorAll(".card.not-flipped");
        if (element && element.length != 0) {
            cardElements.push(childrenList[k]);
        }
    }

    //Fisher yates shuffle
    var i = cardElements.length;
    if (i == 0) return;
    var ddd = document.createElement("absolute-center");
    while (--i) {
        var j = Math.floor(Math.random() * (i + 1));
        if (i != j) {
            deckContainerElement.replaceChild(ddd, cardElements[i]);
            deckContainerElement.replaceChild(cardElements[i], cardElements[j]);
            deckContainerElement.replaceChild(cardElements[j], ddd);
        }
    }


    //animation

    if (lastCard) {
        lastCard.style.transform = 'translate3d(200%, -25%, 0) scale(0.3)';
    }

    var cards = form.querySelectorAll(".card.not-flipped");
    if (cards.length > 0) {

        for (var i = 0; i < cards.length; i++) {
            card = cards[i];
            var toshift = 20 + i * 3;
            card.style.transform = 'translate3d(-' + toshift + '%, -' + toshift + '%, 0) scale(0.5)';
        }

        var myVar = setTimeout(function () {
            for (var i = 0; i < cards.length; i++) {
                card = cards[i];
                var toshift = i * 3;
                card.style.transform = 'translate3d(-' + toshift + '%, -' + toshift + '%, 0) scale(1)';
            }
        }, 800);
    }
}