console.log("Ayesha Manzoor");
console.log("Function Task");

// Full Stack Web Development Bootcamp
// Coding Challenge
// Functions

//********************Task#1 **************************/

let sum = (a, b) => {
  return a + b; // return the value of (num1 + num2)
};

let num1 = Number(prompt("Enter a number 1"));
let num2 = Number(prompt("Enter a number 2"));
console.log(sum(num1, num2));
alert(`Sum= ${sum(num1, num2)}`);

//********************Task#2 **************************/

let isEven = (a) => {
  if (a % 2 == 0) {
    console.log(`The given number ${a} is even`);
    alert(`The given number ${a} is even`);
    return true;
  } else {
    a == false;
    console.log(`The given number ${a} is odd`);
    alert(`The given number ${a} is odd`);
    return false;
  }
};
let num = Number(prompt("Enter a number:"));
isEven(num);

//********************Task#3 **************************/

let reverseString = (str) => {
  return str.split("").reverse().join("");
};

let str = String(prompt("ENter the string"));
console.log(reverseString(str));
alert(`The revers string = ${reverseString(str)}`);

//********************Task#4 **************************/

let calculateFactorial = (number) => {
  if (number == 0 || number == 1) {
    return 1;
  } else {
    return number * calculateFactorial(number - 1);
  }
};

let number = Number(prompt("Enter the number to calculate factorial:"));
console.log(calculateFactorial(number));
alert(`The factorial of ${number} = ${calculateFactorial(number)}`);

//********************Task#5 **************************/
let convertTemperature = (tempC) => {
  return (F = tempC * (9 / 5) + 32);
};

let TempC = Number(prompt("Enter the temperature in CElsius"));
console.log(convertTemperature(TempC));
alert(`The fahrenheit of ${TempC} = ${convertTemperature(TempC)}`);

//********************Task#6 **************************/
let countVowels = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u" ||
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U"
    ) {
      count++;
    }
  }
  return count;
};

let word = prompt("Please enter a word");
console.log(countVowels(word));
alert(`${countVowels(word)} vowel is found `);
