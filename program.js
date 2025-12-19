// write a program to create an array of objects representing student, name and score
// 1. Filter out students who passed with more than 36 score
// 2. update the passed students name to uppercase
// 3. get the sum of scores of passed students.


const students = [ {name: "Vasu", score:25},
    {name:"Krishna", score:45},
    {name:"Hari", score:67},
    {name:"Ram", score:35},
    {name:"vishnu", score:56}
]

// 1. Filter out students who passed with more than 36 score
//filter() is used to extract elements from an array that meet a given condition — it returns a new filtered array.
const passedStudents = students.filter(students => students.score>=36);
console.log(passedStudents);

// 2. update the passed students name to uppercase
//map() transforms each element in the array and returns a new array with modified values.
const upperCaseNames = passedStudents.map(students => students.name.toUpperCase());
console.log(upperCaseNames);

// 3. get the sum of scores of passed students.
//reduce() iterates over an array and combines all elements into a single output value, like a sum or object.
const totalScore = passedStudents.reduce((acc,students) => acc +students.score, 0);
// {
//     acc=acc+students.score;
//     return acc;

// },0);


console.log("Total score is: " +totalScore);


const numbers = [1, 2, 3, 4, 5];

// Double even numbers and sum them
const result = numbers
  .filter(num => num % 2 === 0)  // [2, 4]
  .map(num => num * 2)           // [4, 8]
  .reduce((acc, num) => acc + num, 0); // 12

console.log(result); // 12


