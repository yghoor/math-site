import React, { Component } from 'react';

const Display = () => (
  <div className="calculator-display">
    <div className="display-value">0</div>
  </div>
);

const Buttons = () => (
  <div className="buttons">
    <button className="button value-button">AC</button>
    <button className="button value-button">+/-</button>
    <button className="button value-button">%</button>
    <button className="button operator-button">÷</button>
    <button className="button value-button">7</button>
    <button className="button value-button">8</button>
    <button className="button value-button">9</button>
    <button className="button operator-button">×</button>
    <button className="button value-button">4</button>
    <button className="button value-button">5</button>
    <button className="button value-button">6</button>
    <button className="button operator-button">-</button>
    <button className="button value-button">1</button>
    <button className="button value-button">2</button>
    <button className="button value-button">3</button>
    <button className="button operator-button">+</button>
    <button className="button value-button zero-button">0</button>
    <button className="button value-button">.</button>
    <button className="button operator-button">=</button>
  </div>
);

class Calculator extends Component {
  state = {}

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <section className="calculator">
        <Display />
        <Buttons />
      </section>
    );
  }
}

export default Calculator;