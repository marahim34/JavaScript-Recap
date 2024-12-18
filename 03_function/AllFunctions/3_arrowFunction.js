// Arrow Funciton: A concise syntax for writing functions, often used for shorter, cleaner code. Arrow functions do not have their own this.

// Use them for short, concise logic, especially in functional programming (e.g., mapping or filtering arrays).

const greet = (name) => `Hello ${name}`;
const greet1 = (name) => console.log(`Hello ${name}`);

console.log(greet("Saidul"));
greet1("Saidul1");

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((number) => number * 2);

console.log(doubled);
