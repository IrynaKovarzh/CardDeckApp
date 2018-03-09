function shuffle(form) {

    if (lastCard) {
        lastCard.style.transform = 'translate3d(200%, -25%, 0) scale(0.3)';
    }

    var cards = form.querySelectorAll(".card.not-flipped");
    if (cards.length > 0) {

        for (var iiii = 0; iiii < cards.length; iiii++) {
            card = cards[iiii];
            var toshift = 20 + iiii * 3;
            card.style.transform = 'translate3d(-' + toshift + '%, -' + toshift + '%, 0) scale(0.5)';
        }

        var myVar2 = setTimeout(function () {
            for (var iiiii = 0; iiiii < cards.length; iiiii++) {
                card = cards[iiiii];
                var toshift = iiiii * 3;
                card.style.transform = 'translate3d(-' + toshift + '%, -' + toshift + '%, 0) scale(1)';
            }
        }, 800);
    }

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
}