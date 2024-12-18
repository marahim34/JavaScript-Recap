function printer(value) {
  console.log("The value (first): " + value);
}

function calculator(number1, number2, callback) {
  const sum = number1 + number2;
  callback(sum);
}

function timeOutCallback() {
  calculator(5, 7, printer);
}

setTimeout(timeOutCallback, 3000);

timeOutCallback();

console.log("Start of script");

function printer(value) {
  console.log("The value: (second(" + value);
}

function calculator(number1, number2, callback) {
  const sum = number1 + number2;
  callback(sum);
}

function timeOutCallback() {
  calculator(5, 7, printer);
}

setTimeout(timeOutCallback, 3000);

console.log("End of script");

console.log("Start of script");

const myPromise = new Promise((resolve, reject) => {
  let condition;

  // A function call that takes time to complete
  setTimeout(() => {
    resolve("Promise is resolved");
    // reject('Promise is rejected');
  }, 3000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("End of script");

// setTimeout(() => {
//   const data = {
//     firstname: "John",
//     lastname: "Wick",
//   };
//   resolve(data);
// }, 3000);
