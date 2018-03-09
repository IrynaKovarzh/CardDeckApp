var lastCard;

function takecard(form) {
    if (lastCard) {
        lastCard.style.transform = 'translate3d(200%, -25%, 0) scale(0.3)';
    }

    var cards = form.querySelectorAll(".card.not-flipped");

    if (cards.length > 0) {
        lastCard = cards[cards.length - 1];

        lastCard.getElementsByClassName('back')[0].style.transform = 'rotate3d(0,1,0, 180deg)';
        lastCard.getElementsByClassName('front')[0].style.transform = 'rotate3d(0,1,0, 0deg)';
        lastCard.classList.add("flipped");
        lastCard.classList.remove("not-flipped");

        //To shift a bit a top flipped card
        lastCard.style.transform = 'translate3d(-5%, -5%, 0)';
    }

}