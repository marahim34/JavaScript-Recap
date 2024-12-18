const myPromise = new Promise((resolve, reject) => {
  const foodReady = true;

  if (foodReady) {
    resolve("Food is ready! 🍔");
  } else {
    reject("Sorry, we're out of ingredients! ❌");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
