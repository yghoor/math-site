/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import Calculator from '../components/Calculator.js';

test('renders "Calculator" component', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

describe('functional buttons', () => {
  test('"AC" button', () => {
    const { container } = render(<Calculator />);
    const calculatorDisplay = container.getElementsByClassName('calculator-display')[0];

    const numberButton = screen.queryByText('1');
    const ACButton = screen.queryByText('AC');

    userEvent.click(numberButton);
    expect(calculatorDisplay).toHaveTextContent('1');

    userEvent.click(ACButton);
    expect(calculatorDisplay).toHaveTextContent('0');
  });

  test('"+/-" button', () => {
    const { container } = render(<Calculator />);
    const calculatorDisplay = container.getElementsByClassName('calculator-display')[0];

    const numberButton = screen.queryByText('1');
    const signButton = screen.queryByText('+/-');

    userEvent.click(numberButton);
    expect(calculatorDisplay).toHaveTextContent('1');

    userEvent.click(signButton);
    expect(calculatorDisplay).toHaveTextContent('-1');

    userEvent.click(signButton);
    expect(calculatorDisplay).toHaveTextContent('1');
  });

  test('decimal point', () => {
    const { container } = render(<Calculator />);
    const calculatorDisplay = container.getElementsByClassName('calculator-display')[0];

    const numberButton = screen.queryByText('1');
    const decimalPoint = screen.queryByText('.');

    userEvent.click(numberButton);
    expect(calculatorDisplay).toHaveTextContent('1');

    userEvent.click(decimalPoint);
    expect(calculatorDisplay).toHaveTextContent('1.');
  });
});

describe('number buttons', () => {
  test('calculator display is updated for all numbers', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const { container } = render(<Calculator />);
    const calculatorDisplay = container.getElementsByClassName('calculator-display')[0];

    numbers.forEach((number) => {
      const button = screen.queryByText(number.toString());
      userEvent.click(button);
    });

    expect(calculatorDisplay).toHaveTextContent(numbers.join(''));
  });
});

describe('operator buttons and "=" button', () => {
  test('calculator display is updated throughout calculations with all operators', () => {
    const operators = ['+', '-', 'x', '÷', '%'];

    const { container } = render(<Calculator />);
    const calculatorDisplay = container.getElementsByClassName('calculator-display')[0];

    const numButton1 = screen.queryByText('8');
    const numButton2 = screen.queryByText('6');
    const equalsButton = screen.queryByText('=');

    operators.forEach((operator) => {
      let updatedOperator;
      if (operator === '÷') { updatedOperator = '/'; }
      if (operator === 'x') { updatedOperator = '*'; }

      const operatorButton = screen.queryByText(operator);

      userEvent.click(numButton1);
      expect(calculatorDisplay).toHaveTextContent('8');
      userEvent.click(operatorButton);
      expect(calculatorDisplay).toHaveTextContent('8');
      userEvent.click(numButton2);
      expect(calculatorDisplay).toHaveTextContent('6');
      userEvent.click(equalsButton);
      expect(calculatorDisplay).toHaveTextContent(eval(`8 ${updatedOperator || operator} 6`));
    });
  });
});