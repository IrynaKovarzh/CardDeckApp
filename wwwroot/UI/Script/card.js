function Card(cardIndex) {
    
    var toshift = cardIndex * 3;
    var tr = "translate3d(-" + toshift + "%, -" + toshift + "%, 0px);";

    return (`
        <div class="absolute-center">
            <div class="card not-flipped backface" style="transform: ${tr}">
                <div class="back" style="background-image: url('${ deckdata['back-image']}');"></div>
                <div class="front" style="background-image: url('${ deckdata.cards[cardIndex]['front-image']}')"></div>
            </div>
        </div>
    `);
}