console.log("Hello from JS");

console.log(document);
console.log(document.body);

console.log(document.activeElement);

// getElementsByTagName
const liCollection = document.getElementsByTagName("li");

// console.log(liCollection);

let arr = [];

for (const li of liCollection) {
  console.log(li);
  arr.push(li.innerText);
}

console.log(arr);

for (let i = 0; i < liCollection.length; i++) {
  console.log(liCollection[i].innerText);
}

const allHeadings = document.getElementsByTagName("h1");
let allHeadingTag = [];
for (const heading of allHeadings) {
  allHeadingTag.push(heading.innerHTML);
}

console.log(allHeadingTag);

// getElementsByClassName
const allCities = document.getElementsByClassName("important-classes");

let cities = [];

for (const city of allCities) {
  cities.push(city.innerText);
  city.style.color = "red";
}

console.log(cities);

// getElementById
const fruitsTitle = document.getElementById("fruits-title");
console.log(fruitsTitle.innerText);

fruitsTitle.innerText = "WoW! Fruits!!!";
fruitsTitle.style.cssText = "color: blue; font-size: 24px; color: black";

// querySelectorAll
const fruits_names = document.querySelectorAll(".fruits");
console.log(fruits_names);

console.log("Fruits from for of loop: ");
for (const fruit of fruits_names) {
  console.log(fruit.innerText);
}

// Another way
console.log("From forEach loop: ");
fruits_names.forEach((fruit) => {
  console.log(fruit.innerText);
});
