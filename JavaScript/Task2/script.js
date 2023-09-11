// ----------------------------------------Full Stack Web Development Bootcamp----------------------------
// ----------------------------------------------Coding Challenge-----------------------------------------
// **************************************If Else and Logical Operators Statements***********************
// ------------------------BMI Updated------------------------

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
  alert("Mark's BMI is higher than John's!");
  console.log("Mark's BMI is higher than John's!" + Mark_BMI);
} else {
  markHigherBMI = false;
  alert("John's BMI is higher than Mark's!");
  console.log("John's BMI is higher than Mark's!" + John_BMI);
}

// ------Task#2

let Mark_mass1 = prompt("Enter the Mark mass:");
Mark_mass1 = parseFloat(Mark_mass1);
console.log("Mark_mass: " + Mark_mass1);
let John_mass1 = prompt("Enter the John mass:");
John_mass1 = parseFloat(John_mass1);
console.log("John_mass: " + John_mass1);

let markHigherBMI1;

let Mark_height1 = prompt("Enter the mark height:");
Mark_height1 = parseFloat(Mark_height1);
console.log("Mark_Height: " + Mark_height1);

let John_height1 = prompt("Enter the john height:");
John_height1 = parseFloat(John_height1);
console.log("John_Height: " + John_height1);

Mark_BMI1 = Mark_mass1 / Mark_height1 ** 2;
alert(`Mark_BMI : ${Mark_BMI1}`);
console.log("Mark BMI: " + Mark_BMI1);

John_BMI1 = John_mass1 / John_height1 ** 2;
alert(`John_BMI : ${John_BMI1}`);
console.log("John BMI: " + John_BMI1);

if (Mark_BMI1 > John_BMI1) {
  markHigherBMI1 = true;
  alert(`Mark's BMI ${Mark_BMI1}is higher than John's! ${John_BMI1}`);
  console.log(`Mark's BMI ${Mark_BMI1}is higher than John's! ${John_BMI1}`);
} else {
  markHigherBMI1 = false;
  alert(`John's BMI ${John_BMI1} is higher than Mark's ${Mark_BMI1}!`);
  console.log(`John's BMI ${John_BMI1} is higher than Mark's ${Mark_BMI1}!`);
}

//------------------Question#2----------------------------------
//**************Part#1********** */
let age = prompt("Enter your age:");
console.log(age);
if (age >= 1 && age <= 17) {
  alert("You are not eligible to give a vote.");
  console.log(" You are not eligible to give a vote.");
} else if (age >= 18 && age <= 65) {
  alert("You are eligible to give a vote, You are Adults");
  console.log(" You are not eligible to give a vote, You are Adults");
} else if (age > 65) {
  alert("You are eligible to give a vote, You are Older Adults");
  console.log(" You are eligible to give a vote, You are Older Adults");
} else {
  alert("You enter the Wrong Input");
  console.log("You enter the Wrong Input!");
}

//**************Part#2********** */

let grade = prompt("Enter your grade!(e.g 'A','B','C','D','E','F')");
console.log(grade);
switch (grade) {
  case "A":
    alert("Excellent Job! You got 1st position");
    console.log("Excellent Job! You got 1st position");
    break;
  case "B":
    alert("Great Job!");
    console.log("Great Job! ");
    break;
  case "C":
    alert("Good job!");
    console.log("Good job!");
    break;
  case "D":
    alert("Do more effort!");
    console.log("Do more effort!");
    break;
  case "F":
    alert("Sorry! You are fail");
    console.log("Sorry! You are fail");
    break;

  default:
    alert("You enter wrong input");
    console.log("You enter wrong input");
    break;
}

if (grade == "A") {
  alert("Excellent Job! You got 1st position");
  console.log("Excellent Job! You got 1st position");
} else if (grade == "B") {
  alert("Great Job!");
  console.log("Great Job! ");
} else if (grade == "C") {
  alert("Good job!");
  console.log("Good job!");
} else if (grade == "D") {
  alert("Do more effort!");
  console.log("Do more effort!");
} else if (grade == "F") {
  alert("Sorry! You are fail");
  console.log("Sorry! You are fail");
} else {
  alert("You enter wrong input");
  console.log("You enter wrong input");
}

//**************Part#3********** */
let age1 = prompt("Enter your age:");
console.log(age1);
if (age1 >= 0 && age <= 2) {
  alert("You are Baby");
  console.log(" You are Baby");
} else if (age >= 3 && age <= 5) {
  alert("You are toddler");
  console.log(" You are toddler");
} else if (age >= 6 && age <= 12) {
  alert("You are Child");
  console.log(" You are Child");
} else if (age >= 13 && age <= 18) {
  alert("You are Teenager");
  console.log(" You are Teenager");
} else if (age >= 19) {
  alert("You are an Adult");
  console.log(" You are an Adult");
} else {
  alert("You enter the Wrong Input");
  console.log("You enter the Wrong Input!");
}

//**************Part#4********** */

let num = prompt("Enter the number!");
console.log(num);
if (num > 0) {
  alert("The number is positive");
  console.log("The number is positive");
} else if (num == 0) {
  alert("The number is zero");
  console.log("The number is zero");
} else if (num < 0) {
  alert("The number is negative");
  console.log("The number is negative");
} else {
  alert("You enter the wrong input");
  console.log("You enter the wrong input");
}
