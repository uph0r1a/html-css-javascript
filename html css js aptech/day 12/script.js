//Ex 1

let book = {
    title: "MK",
    author: "AH",
    pages: 1000
}

console.log(book.title);

console.log(book.author);

//Ex 2
let student = {
    name: "Tri",
    scores: {
        math: 10,
        english: 9.5
    }
}

console.log(student.scores.english);

//Ex 1

let student1 = {
    info:{
        name:"Tri",
        age: 18
    },
    grades: {
        math:10,
        english: 9.5
    }
}

console.log(student.grades.math);

student.info.name = "Thai Duc Tri";

student.info.address = "Ha Noi";

let newstudent = JSON.parse(JSON.stringify(student));

newstudent.info.name = "lmcsml"

console.log(newstudent);

//Ex 1

let product = [
  { name: "iPhone", price: 1000 },
  { name: "Laptop", price: 1500 },
  { name: "Mouse", price: 50 }
];

for (let i = 0; i < product.length; i++) {
    console.log(product[i].name);
}

product.push({ name: 'Keyboard', price: 100 })

console.log(product);

let over1000 = [];

for (let j = 0; j < product.length; j++) {
    if (product[j].price > 1000) {
        over1000.push(product[j])
    }
}

console.log(over1000);

//Ex 2

let student = [
    {
        name: "Tri",
        score: 9
    },

    {
        name: "rti",
        score: 10
    },

    {
        name: "irt",
        score: 2
    }
];

let max = student[0];

for (let i = 1; i < student.length; i++) {
    if (student[i].score > max.score) {
        max = student[i];
    }
};

console.log(max);

let grad = [];

for (let j = 0; j < student.length; j++) {
    if (student[j].score >= 5) {
        grad.push(student[j]);
    }    
}

console.log(grad);

let check = false;

for (let k = 0; k < student.length; k++) {
    if (student[k].score < 3) {
        check = true;
    }
}

console.log(check);
