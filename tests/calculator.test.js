// 1. Library with basic math functions: `add`, `substract`, `multiple`, `divide`.
// 2. throw an error `throw new Error('your message')` when attempting to divide by 0
const assert = require('assert');
const calculator = require('../src/calculator');// mocha test

describe('calculator library', () => {
  it('adds correctly', () => {
    const sum = calculator.calcAdd(2,3);
    assert.equal(sum, 5);

  });
  it('subtracts correctly', () => {

  });
  it('multiplies correctly', () => {

  });
  it('divides correctly', () => {


  });



});
