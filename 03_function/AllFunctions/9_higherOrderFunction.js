// Higher-Order Functions: Functions that take other functions as arguments or return functions.

function add(a, b) {
  return a + b;
}

function calculate(operation, a, b) {
  return operation(a, b);
}

console.log(calculate(add, 2, 3));
