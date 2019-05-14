import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
 return (
     <div className ="calc-display">
        <p>{props.displayText}</p>
     </div>
 )
}

export default CalculatorDisplay;