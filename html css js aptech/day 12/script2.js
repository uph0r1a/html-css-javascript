let products = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 }
];

function getProductById(id) {
  return products.find(product => product.id === id);
}

function getTotalPrice() {
  return products.reduce((total, product) => total + product.price, 0);
}

products.push({ id: 4, name: "Headphone", price: 200 });

let expensiveProductNames = products
  .filter(product => product.price > 700)
  .map(product => product.name);

console.log("San pham co gia > 700:", expensiveProductNames);

console.log("San pham co id = 2:", getProductById(2));
console.log("Tong gia:", getTotalPrice());
