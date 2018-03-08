function shuffle(form) {

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

        var myVar2 = setTimeout(function () {
            for (var i = 0; i < cards.length; i++) {
                card = cards[i];
                var toshift = i * 3;
                card.style.transform = 'translate3d(-' + toshift + '%, -' + toshift + '%, 0) scale(1)';
            }
        }, 800);
    }
}