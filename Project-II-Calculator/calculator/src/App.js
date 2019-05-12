import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay displayText="0"/>
    
      <div className="calc-button-block">
        <div className="calc-white-block">
          <ActionButton buttonClass="action-button-white" text="clear"/>
          <NumberButton buttonStyle="num" text="7"/>
          <NumberButton buttonStyle="num" text="8"/>
          <NumberButton buttonStyle="num" text="9"/>
          <NumberButton buttonStyle="num" text="4"/>
          <NumberButton buttonStyle="num" text="5"/>
          <NumberButton buttonStyle="num" text="6"/>
          <NumberButton buttonStyle="num" text="1"/>
          <NumberButton buttonStyle="num" text="2"/>
          <NumberButton buttonStyle="num" text="3"/>
          <NumberButton buttonStyle="num-zero" text ="0"/>
        </div>
        <div className="action-button-col">
          <ActionButton buttonClass="action-button" text="÷"/>
          <ActionButton buttonClass="action-button" text="x"/>
          <ActionButton buttonClass="action-button" text="-"/>
          <ActionButton buttonClass="action-button" text="+"/>
          <ActionButton buttonClass="action-button" text="="/>
        </div>
      </div>
    
    </div>
  );
};

export default App;
