// Async Functions: Functions that handle asynchronous operations and always return a Promise.
// Use them when handling asynchronous operations like API calls or reading files. They make the code easier to read and write compared to chaining then() calls with Promises
async function fetchData() {
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  return response.json();
}

fetchData().then((data) => console.log(data));
