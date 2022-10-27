/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Calculator.css';
import calculate from '../logic/calculate';

function Display({ newData }) {
  const newValue = () => {
    if (newData === undefined) {
      return '0';
    }

    const { total, next } = newData;
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

const Buttons = ({ updateCalculatorData }) => (
  <div className="buttons">
    <button
      type="button"
      className="button value-button"
      onClick={() => {
        updateCalculatorData('AC');
      }}
    >
      AC
    </button>
    <button
      type="button"
      className="button value-button"
      onClick={() => {
        updateCalculatorData('+/-');
      }}
    >
      +/-
    </button>
    <button
      type="button"
      className="button value-button"
      onClick={() => {
        updateCalculatorData('%');
      }}
    >
      %
    </button>
    <button
      type="button"
      className="button operator-button"
      onClick={() => {
        updateCalculatorData('÷');
      }}
    >
      ÷
    </button>
    <button
      type="button"
      className="button value-button"
      onClick={() => {
        updateCalculatorData('7');
      }}
    >
      7
    </button>
    <button
      type="button"
      className="button value-button"
      onClick={() => {
        updateCalculatorData('8');
      }}
    >
      8
    </button>
    <button
      type="button"
      className="button value-button"
      onClick={() => {
        updateCalculatorData('9');
      }}
    >
      9
    </button>
    <button
      type="button"
      className="button operator-button"
      onClick={() => {
        updateCalculatorData('x');
      }}
    >
      x
    </button>
    <button
      type="button"
      className="button value-button"
      onClick={() => {
        updateCalculatorData('4');
      }}
    >
      4
    </button>
    <button
      type="button"
      className="button value-button"
      onClick={() => {
        updateCalculatorData('5');
      }}
    >
      5
    </button>
    <button
      type="button"
      className="button value-button"
      onClick={() => {
        updateCalculatorData('6');
      }}
    >
      6
    </button>
    <button
      type="button"
      className="button operator-button"
      onClick={() => {
        updateCalculatorData('-');
      }}
    >
      -
    </button>
    <button
      type="button"
      className="button value-button"
      onClick={() => {
        updateCalculatorData('1');
      }}
    >
      1
    </button>
    <button
      type="button"
      className="button value-button"
      onClick={() => {
        updateCalculatorData('2');
      }}
    >
      2
    </button>
    <button
      type="button"
      className="button value-button"
      onClick={() => {
        updateCalculatorData('3');
      }}
    >
      3
    </button>
    <button
      type="button"
      className="button operator-button"
      onClick={() => {
        updateCalculatorData('+');
      }}
    >
      +
    </button>
    <button
      type="button"
      className="button value-button zero-button"
      onClick={() => {
        updateCalculatorData('0');
      }}
    >
      0
    </button>
    <button
      type="button"
      className="button value-button"
      onClick={() => {
        updateCalculatorData('.');
      }}
    >
      .
    </button>
    <button
      type="button"
      className="button operator-button"
      onClick={() => {
        updateCalculatorData('=');
      }}
    >
      =
    </button>
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
    const calculatorData = calculate((prevState) => (prevState.calculatorData), buttonName);
    this.setState({ calculatorData });
  }

  render() {
    const { calculatorData } = this.state;
    return (
      <section className="calculator">
        <Display newData={calculatorData} />
        <Buttons
          updateCalculatorData={this.updateCalculatorData}
        />
      </section>
    );
  }
}

export default Calculator;

Display.propTypes = {
  newData: PropTypes.shape({
    total: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired,
  }),
};

Display.defaultProps = {
  newData: {},
};

Buttons.propTypes = {
  updateCalculatorData: PropTypes.func.isRequired,
};
