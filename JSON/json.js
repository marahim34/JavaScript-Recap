const user = { id: 1, name: "Donald Trump", occupation: "Business" };

console.log(user);
console.log(typeof user);

// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(stringified);

const shop = {
  owner: "Joe Biden",
  address: {
    street: "Insinoorikatu",
    city: "New York",
    country: "USA",
  },
  products: ["Laptop", "Monitor", "Key Board", "Micro Phone"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};

console.log(shop);

const stringifiedShop = JSON.stringify(shop);
console.log(stringifiedShop);
