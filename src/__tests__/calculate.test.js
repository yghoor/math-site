import calculate from '../logic/calculate.js';

const nullObject = {
  total: null,
  next: null,
  operation: null,
};

describe('functional buttons', () => {
  test('returns null object when buttonName is AC', () => {
    const object = {
      total: '20',
      next: '10',
      operation: '+',
    };

    expect(calculate(object, 'AC')).toEqual(nullObject);
  });

  describe('returns opposite sign when buttonName is +/-', () => {
    test('works for "next"', () => {
      const positiveNext = {
        total: null,
        next: '10',
        operation: null,
      };

      const negativeNext = {
        total: null,
        next: '-10',
        operation: null,
      };

      expect(calculate(positiveNext, '+/-')).toEqual(negativeNext);
    });

    test('works for "total"', () => {
      const positiveTotal = {
        total: '10',
        next: null,
        operation: null,
      };

      const negativeTotal = {
        total: '-10',
        next: null,
        operation: null,
      };

      expect(calculate(negativeTotal, '+/-')).toEqual(positiveTotal);
    });
  });

  describe('decimal point', () => {
    test('works if pressed first', () => {
      expect(calculate(nullObject, '.')).toEqual({
        total: null,
        next: '0.',
        operation: null,
      });
    });

    test('works for "next"', () => {
      const object = {
        total: null,
        next: '10',
        operation: null,
      };

      expect(calculate(object, '.')).toEqual({
        total: null,
        next: '10.',
        operation: null,
      });
    });

    test('works for "total"', () => {
      const object = {
        total: '10',
        next: null,
        operation: null,
      };

      expect(calculate(object, '.')).toEqual({
        total: '10',
        next: '10.',
        operation: null,
      });
    });

    test('does not add decimal point if already exists', () => {
      const object = {
        total: null,
        next: '10.',
        operation: null,
      };

      expect(calculate(object, '.')).toEqual({
        total: null,
        next: '10.',
        operation: null,
      });
    });

    test('returns nothing if total has decimal point', () => {
      const object = {
        total: '10.5',
        next: null,
        operation: null,
      };

      expect(calculate(object, '.')).toEqual({});
    });

    test('works if there is an operation and no next', () => {
      const object = {
        total: '10',
        next: null,
        operation: '+',
      };

      expect(calculate(object, '.')).toEqual({
        total: '10',
        next: '0.',
        operation: '+',
      });
    });
  });
});

describe('number buttons', () => {
  test('returns empty object when buttonName is 0 and next is 0', () => {
    const object = {
      total: null,
      next: '0',
      operation: '+',
    };

    expect(calculate(object, '0')).toEqual({});
  });

  describe('"next" works correctly', () => {
    test('first number', () => {
      expect(calculate(nullObject, '1')).toEqual({
        total: null,
        next: '1',
      });
    });

    test('if operation exists', () => {
      const object = {
        total: '20',
        next: null,
        operation: '+',
      };

      expect(calculate(object, '1')).toEqual({
        total: '20',
        next: '1',
        operation: '+',
      });
    });

    test('more than 1 digit numbers', () => {
      const object = {
        total: null,
        next: '1',
      };

      expect(calculate(object, '1')).toEqual({
        total: null,
        next: '11',
      });
    });
  });
});

describe('operator buttons', () => {
  test('returns empty object when an operation is the first button', () => {
    const object = {
      total: null,
      next: null,
      operation: null,
    };

    expect(calculate(object, '+')).toEqual({});
  });

  test('shift next into total and save operation if next exists and total is null', () => {
    const object = {
      total: null,
      next: '10',
      operation: null,
    };

    expect(calculate(object, '+')).toEqual({
      total: '10',
      next: null,
      operation: '+',
    });
  });

  test('if just pressed "=", save operation', () => {
    const object = {
      total: '10',
      next: null,
      operation: null,
    };

    expect(calculate(object, '+')).toEqual({
      total: '10',
      next: null,
      operation: '+',
    });
  });

  test('if all 3 properties have values, evaluate current expression and save new operation', () => {
    const object = {
      total: '10',
      next: '20',
      operation: '+',
    };

    expect(calculate(object, '+')).toEqual({
      total: '30',
      next: null,
      operation: '+',
    });
  });
});

describe('"=" button', () => {
  test('if all 3 properties have values, evaluates current expression', () => {
    const object = {
      total: '10',
      next: '20',
      operation: '+',
    };

    expect(calculate(object, '=')).toEqual({
      total: '30',
      next: null,
      operation: null,
    });
  });

  test('returns empty object when no next exists', () => {
    const object = {
      total: '10',
      next: null,
      operation: '+',
    };

    expect(calculate(object, '=')).toEqual({});
  });

  test('returns empty object when no operation and no next exists', () => {
    const object = {
      total: '10',
      next: null,
      operation: null,
    };

    expect(calculate(object, '=')).toEqual({});
  });
});