let array = [1, 2, 3, 4, 5];
const even = array.filter(n => n % 2 == 0);
console.log(even);
const double = array.map(n => n * 2);
console.log(double);
const sum = array.reduce((total,num) => total + num,0);
console.log(sum);