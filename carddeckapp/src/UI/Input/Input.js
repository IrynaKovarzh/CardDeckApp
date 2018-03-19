import React, { Component } from 'react';

//import classes from './Input.css';
import classes from './../../css/decks.css';

const input = (props) => {
    let inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className={classes.input} {...props} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.textarea} {...props} />;
            break;
        default:
            inputElement = <input className={classes.input} {...props} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;