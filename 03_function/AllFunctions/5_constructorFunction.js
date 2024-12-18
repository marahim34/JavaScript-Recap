// Constructor Functions: Used with the new keyword to create objects. Typically, they start with an uppercase letter.

function Person(name) {
  this.name = name;
}

const person = new Person("Saidul");

console.log(person);
console.log(person.name);
