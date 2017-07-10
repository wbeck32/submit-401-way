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
  var q = x/y;
  return q.toFixed(3);
}

module.exports = {
  calcAdd,
  calcSubtract,
  calcMultiply,
  calcDivide
};
