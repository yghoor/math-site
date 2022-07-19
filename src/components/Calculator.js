/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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

const Buttons = (props) => (
  <div className="buttons">
    <button className="button value-button" onClick={() => {
      props.updateCalculatorData('AC');
    }}>AC</button>
    <button className="button value-button" onClick={() => {
      props.updateCalculatorData('+/-');
    }}>+/-</button>
    <button className="button value-button" onClick={() => {
      props.updateCalculatorData('%');
    }}>%</button>
    <button className="button operator-button" onClick={() => {
      props.updateCalculatorData('÷');
    }}>÷</button>
    <button className="button value-button" onClick={() => {
      props.updateCalculatorData('7');
    }}>7</button>
    <button className="button value-button" onClick={() => {
      props.updateCalculatorData('8');
    }}>8</button>
    <button className="button value-button" onClick={() => {
      props.updateCalculatorData('9');
    }}>9</button>
    <button className="button operator-button" onClick={() => {
      props.updateCalculatorData('x');
    }}>x</button>
    <button className="button value-button" onClick={() => {
      props.updateCalculatorData('4');
    }}>4</button>
    <button className="button value-button" onClick={() => {
      props.updateCalculatorData('5');
    }}>5</button>
    <button className="button value-button" onClick={() => {
      props.updateCalculatorData('6');
    }}>6</button>
    <button className="button operator-button" onClick={() => {
      props.updateCalculatorData('-');
    }}>-</button>
    <button className="button value-button" onClick={() => {
      props.updateCalculatorData('1');
    }}>1</button>
    <button className="button value-button" onClick={() => {
      props.updateCalculatorData('2');
    }}>2</button>
    <button className="button value-button" onClick={() => {
      props.updateCalculatorData('3');
    }}>3</button>
    <button className="button operator-button" onClick={() => {
      props.updateCalculatorData('+');
    }}>+</button>
    <button className="button value-button zero-button" onClick={() => {
      props.updateCalculatorData('0');
    }}>0</button>
    <button className="button value-button" onClick={() => {
      props.updateCalculatorData('.');
    }}>.</button>
    <button className="button operator-button" onClick={() => {
      props.updateCalculatorData('=');
    }}>=</button>
  </div>
);

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorData: {},
    };
    this.updateCalculatorData = this.updateCalculatorData.bind(this);
  }

  updateCalculatorData(buttonName) {
    const calculatorData = calculate(this.state.calculatorData, buttonName);
    this.setState({ calculatorData });
  }

  render() {
    return (
      <section className="calculator">
        <Display newData={this.state.calculatorData}/>
        <Buttons
          updateCalculatorData={this.updateCalculatorData}
        />
      </section>
    );
  }
}

export default Calculator;