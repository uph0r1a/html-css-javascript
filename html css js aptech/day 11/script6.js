const array = [
  { name: "An", age: 20 },
  { name: "Bình", age: 21 },
  { name: "Châu", age: 20 },
  { name: "Dũng", age: 22 },
];

for (let i = 0; i < array.length - 1; i++) {
  if (array[i].age > array[i + 1].age) {
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
  }
}

console.log(array);
