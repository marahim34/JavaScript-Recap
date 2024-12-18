// Anonymous Function: Functions without a name, typically used as arguments in higher-order functions.

const greet = function (name) {
  return `Hello ${name}`;
};

console.log(greet("Saidul"));

// Another version

// This should be used when the function is a one-off or when passing it as an argument to another function. They don’t need a name because they’re not reused.
setTimeout(function () {
  console.log("This runs after 2 seconds");
  console.log("Hello, Saidul");
}, 2000);
