// ----------------------------------------------Full Stack Web Development Bootcamp-----------------------------------------------
// *************************************************Coding Challenge****************************************

// --------------------Question#1------------------

// ------Task#1
let string = "Hello, world!";
console.log(string);

// ------Task#2
const name = "Ayesha Manzoor";
let detail = `My Name is ${name} 
I am Learning JavaScript via Full Stack Bootcamp of DiaaTech
I will become the best developer by hard work.
I am making commitment to do code with consistency. `;
console.log(detail);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Variables
// ------Task#1
let full_name = "Ayesha Manzoor";
let age = 23;
let intro = "My name is " + full_name + " and my age is " + age;
console.log(intro);

// ------Task#2
let first_Name = "Ayesha";
let last_Name = "Manzoor";
let education = "I am Learning JavaScript via Full Stack Bootcamp of DiaaTech";
let goal = "I will become the best developer by hard work.";
let work = "I am making commitment to do code with consistency.";

let details = `My Name is ${first_Name}${last_Name}.\n${education}\n ${goal}\n ${work}`;
console.log(details);

// ------Task#3
let num1 = prompt("Enter the first number:\n");
console.log("First Number: " + num1);
let num2 = prompt("Enter the second number:\n");
console.log("Second Number: " + num2);

let sum = parseInt(num1) + parseInt(num2);
alert(`The Sum Of The Numbers Is : ${sum}`);
console.log("Sum is = " + sum);

let sub = parseInt(num1) - parseInt(num2);
alert(`The Subtraction Of The Numbers Is : ${sub}`);
console.log("Subtraction is = " + sub);

let mul = parseInt(num1) * parseInt(num2);
alert(`The multiplication Of The Numbers Is : ${mul}`);
console.log("Multiplication is = " + mul);

let div = parseInt(num1) / parseInt(num2);
alert(`The Division Of The Numbers Is : ${div}`);
console.log("Division is = " + div);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// BMI
// ------Task#1
let Mark_mass = prompt("Enter the Mark mass:");
Mark_mass = parseFloat(Mark_mass);
console.log("Mark_mass: " + Mark_mass);
let John_mass = prompt("Enter the John mass:");
John_mass = parseFloat(John_mass);
console.log("John_mass: " + John_mass);

let markHigherBMI;

let Mark_height = prompt("Enter the mark height:");
Mark_height = parseFloat(Mark_height);
console.log("Mark_Height: " + Mark_height);

let John_height = prompt("Enter the john height:");
John_height = parseFloat(John_height);
console.log("John_Height: " + John_height);

Mark_BMI = Mark_mass / Mark_height ** 2;
alert(`Mark_BMI : ${Mark_BMI}`);
console.log("Mark BMI: " + Mark_BMI);

John_BMI = John_mass / John_height ** 2;
alert(`John_BMI : ${John_BMI}`);
console.log("John BMI: " + John_BMI);

if (Mark_BMI > John_BMI) {
  markHigherBMI = true;
  alert("Mark has greater BMI than John");
  console.log("Mark has greater BMI than John" + Mark_BMI);
} else {
  markHigherBMI = false;
  alert("Mark has less BMI than John");
  console.log("Mark has less BMI than John" + Mark_BMI);
}
