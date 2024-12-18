// Closure Functions: Functions that remember their lexical scope even after the outer function has executed.

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter());
