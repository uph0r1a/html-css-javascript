let array = [1, 2, 3, 4, 5, 6];

const even = array.filter(n => n % 2 == 0);

const doubleeven = even.map(n => n * 2);

const sum = doubleeven.reduce((total, num ) => total + num, 0);

console.log(sum);