/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import '../stylesheets/Calculator.css';
import calculate from '../logic/calculate.js';

function Display(props) {
  const newValue = () => {
    if (props.newData === undefined) {
      return '0';
    }

    const { total, next } = props.newData;
    if (next) {
      return next;
    }
    if (total) {
      return total;
    }
    return '0';
  };

  return (
    <div className="calculator-display">
      <div className="display-value">{newValue()}</div>
    </div>
  );
}

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