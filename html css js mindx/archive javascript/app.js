let fruitBasket = [
  ["Apple", 5],
  ["Banana", 10],
  ["Grape", 15],
  ["Orange", 3],
  ["Kiwi", 8]
];
fruitBasket.push(["Mango", 20]);
fruitBasket.shift();
for (let fruit of fruitBasket) {
  console.log("I have " + fruit[1] + " " + fruit[0] + "s");
}
