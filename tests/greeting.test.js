// mocha test
const assert = require('assert');
const greeter = require('../src/greeter');

// function greeter(name) {
//   return `Hello ${name}!`;
// }

describe('greeting library', () =>{
  it('greets by name', () => {
    const greeting = greeter('Joe');
    assert.equal(greeting, 'Hello Joe!')
  });
});

it('defaults to stranger when no name is given', () => {


})
