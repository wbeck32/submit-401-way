// 1. Library with basic math functions: `add`, `substract`, `multiple`, `divide`.
// 2. throw an error `throw new Error('your message')` when attempting to divide by 0
const assert = require('assert');
const calculator = require('../src/calculator');

describe('calculator library', () => {
  it('adds correctly', () => {
    const sum = calculator.calcAdd(2, 3);
    assert.equal(sum, 5); //passes
  });
  it('subtracts correctly', () => {
    const difference = calculator.calcSubtract(6, 9);
    assert.equal(difference, -3);
  });
  it('multiplies correctly', () => {

  });
  it('divides correctly', () => {
    const quotient = calculator.calcDivide(36, 31);
    assert.equal(quotient, 1.161)
  });
  it('divides by zero correctly', () => {
    let failed = false;
      try {
        const failByZero = calculator.calcDivide(10, 0);
      }
      catch(err) {
        failed = true;
      }
    // assert.ok(failed);
    assert.ifError(failed);
  });
});
