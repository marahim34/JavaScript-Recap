// Callback Functions: Functions passed as arguments to other functions, typically executed after an operation completes.

function processUserInput(callback) {
  const name = prompt("Enter your name:");
  callback(name);
}
processUserInput((name) => console.log(`Hello, ${name}`));
