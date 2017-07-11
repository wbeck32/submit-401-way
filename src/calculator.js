function calcAdd(x, y) {
  return x + y;
}

function calcSubtract(x, y) {
  return x - y;
}

function calcMultiply(x, y) {
  return x * y;
}

function calcDivide(x, y) {
  if (y === 0) {
    throw new Error('you are trying to divide by 0. not cool');
  }
  var q = x/y;
  return q;
}

module.exports = {
  calcAdd,
  calcSubtract,
  calcMultiply,
  calcDivide
};
