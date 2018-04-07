import React, { Component } from 'react';

import './css/absolutecenter.css';
import './css/cardrotation.css';

class Card extends Component {

    render() {
        const toshift = this.props.cardIndex * 3;
        const tr = 'translate3d(-' + toshift + '%, -' + toshift + '%, 0px)';

        const bimg = require('./Images/' + this.props.backImage + '.png');
        const fimg = require('./Images/' + this.props.frontImage + '.png');

        return (
            <div className="absolute-center">
                <div className="card not-flipped backface" style={{ transform: tr }}>
                    <div className='back' style={{ backgroundImage: `url(${bimg})` }}></div>
                    <div className='front' style={{ backgroundImage: `url(${fimg})` }}></div>
                </div>
            </div>
        );
    }
}

export default Card;