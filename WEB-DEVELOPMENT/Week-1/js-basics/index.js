/* 1. Variables
let name = "John"; // Variable that can be reassigned
const age = 30; // Constant variable that cannot be reassigned
var isStudent = true; // Older way to declare variables, function-scoped
 */

/* 2. Datatypes
let number = 42; // Number
let string = "Hello World"; // String
let isActive = false; // Boolean
let numbers = [1, 2, 3]; // Array
 */

/* 3.Operators
let sum = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = (true && false); // Logical operator
 */

// 4.Function declaration
/* 
function greet(name) {
  return "Hello, " + name;
} 
*/

// Function call
/* 
let message = greet("John"); // "Hello, John"
console.log(message);
*/

// For loop
/* for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0 to 4
}
 */
// While loop
/* let j = 0;
while (j < 5) {
  console.log(j); // Outputs 0 to 4
  j++;
}
 */

/* let user = {
  name: "Harkirat",
  age: 19,
  gender: "M",
};

function greet(user) {
  let salutation = user.gender === "M" ? "Mr." : "Mrs.";
  console.log("Hi " + salutation + " " + user.name);
}

greet(user);
 */
/* 
const users = [
  {
    name: "Harkirat",
    age: 21,
  },
  {
    name: "raman",
    age: 22,
  },
];

const user1 = users[0];
const user1Age = users[0].age;
console.log(user1);
console.log(user1Age);
 */

const user1 = {
  name: "harkirat",
  age: 19,
  address: {
    city: "Delhi",
    country: "India",
    address: "1122 DLF",
  },
};

const city = user1.address.city;
console.log(city);
