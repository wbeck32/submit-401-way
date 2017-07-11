// 1. Library with basic math functions: `add`, `substract`, `multiple`, `divide`.
// 2. throw an error `throw new Error('your message')` when attempting to divide by 0
const assert = require('assert');
const calculator = require('../src/calculator');

describe('calculator library', () => {
  it('adds correctly', () => {
    const sum = calculator.calcAdd(2, 3);
    assert.equal(sum, 5);
  });
  it('subtracts correctly', () => {
    const difference = calculator.calcSubtract(6, 9);
    assert.equal(difference, -3);
  });
  it('multiplies correctly', () => {
    const product = calculator.calcMultiply(9, 5);
    assert.equal(product, 45);
  });
  it('divides correctly', () => {
    const quotient = calculator.calcDivide(36, 4);
    assert.equal(quotient, 9);
  });
  it('divides by zero correctly', () => {
    let failed = false;
      try {
        calculator.calcDivide(10, 0);
      }
      catch(err) {
        failed = true;
      }
    assert.ok(failed);
  });
});
