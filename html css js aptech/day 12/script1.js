let student = {
  name: "Nguyen Van A",
  age: 20,
  gender: "male",
  scores: {
    math: 8,
    english: 7,
    science: 9
  }
};

console.log("Name:", student.name);
console.log("Age:", student.age);

let scores = student.scores;
let average = (scores.math + scores.english + scores.science) / 3;
console.log("Average score:", average);

student.address = "Ha Noi";

delete student.gender;

console.log(student);
