import operate from '../logic/operate.js';

test('addition', () => {
  expect(operate(5, 3, '+')).toBe('8');
});

test('subtraction', () => {
  expect(operate(5, 3, '-')).toBe('2');
});

test('multiplication', () => {
  expect(operate(5, 3, 'x')).toBe('15');
});

describe('division', () => {
  test('division works', () => {
    expect(operate(5, 3, '÷')).toBe('1.66666666666666666667');
  });

  test('divide by zero gives error', () => {
    expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
  });
});

describe('modulo', () => {
  test('modulo works', () => {
    expect(operate(5, 3, '%')).toBe('2');
  });

  test('modulo by zero gives error', () => {
    expect(operate(5, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});