function Card(cardIndex) {
    return (`
        <div class="absolute-center">
            <div class="card not-flipped backface">
                <div class="back" style="background-image: url('${ data['back-image'] }')"></div>
                <div class="front" style="background-image: url('${ data.cards[cardIndex]['front-image'] }')"></div>
            </div>
        </div>
    `);
}