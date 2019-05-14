import React from 'react';
import './Button.css';


const ActionButton = props => {
    return <button className={props.buttonClass}>{props.text}</button>
}

export default ActionButton;