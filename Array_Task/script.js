console.log("Ayesha Manzoor");
console.log("Array_Task");
// Full Stack Web Development Bootcamp
// Coding Challenge
// Functions

//************************Task#01************************** */

let arr = [];
for (let i = 1; i <= 5; i++) {
  let num = Number(prompt(`Enter the Five number to store in array : ${i}`));
  arr.push(num);
}
console.log(arr);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
alert(`The Sum of all numbers is: ${sum}`);
console.log(`The Sum of all numbers is: ${sum}`);

//************************Task#02************************** */

let findMax = (number) => {
  let max = number[0];
  for (let i = 0; i < number.length; i++) {
    if (number[i] > max) {
      max = number[i];
    }
  }
  return max;
};

let array = [];
for (let i = 1; i <= 5; i++) {
  let num = Number(prompt(`Enter the Five number to store in array : ${i}`));
  array.push(num);
}
console.log(array);
let maxNumber = findMax(array);
console.log(`The max number of the array is ${maxNumber}`);
alert(`The max number of the array is ${maxNumber}`);

//************************Task#03************************** */
let sentence = String(prompt("Enter the sentence:"));
let words = sentence.split(" ");
let wordLength = words.length;
console.log(`The total word length is ${wordLength}`);
alert(`The total word length is ${wordLength}`);

//************************Task#04************************** */
let arr1 = [];
for (let i = 1; i <= 5; i++) {
  let num = Number(prompt(`Enter the Five number to store in array : ${i}`));
  arr1.push(num);
}
console.log(arr1);
let calculateAverage = (arr1) => {
  let sum1 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  let ave = sum1 / arr1.length;
  return ave;
};
let average = calculateAverage(arr1);
alert(`The average of all numbers is: ${average}`);
console.log(`The average of all numbers is: ${average}`);

//************************Task#05************************** */

let multipleOFthreeFive = (arr3) => {
  let filterNumber = [];
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 3 === 0 || arr3[i] % 5 === 0) {
      // Use || instead of &&
      filterNumber.push(arr3[i]);
    }
  }
  return filterNumber;
};
let arr3 = [];
for (let i = 1; i <= 5; i++) {
  let num = Number(prompt(`Enter the Five number to store in array : ${i}`));
  arr3.push(num);
}
console.log(arr3);
let numbers = multipleOFthreeFive(arr3);
alert(`The numbers are : ${numbers}`);
console.log(`The numbers are : ${numbers}`);
