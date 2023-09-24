console.log("Ayesha Manzoor");
//Full Stack Web Development Bootcamp
// Coding Challenge
// Loops

/************ Task#1*************** */
//Write a program that uses a for loop to output the numbers from 1 to 10 to the console.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/************ Task#2*************** */
//Write a program that uses a for loop to output the even numbers from 0 to 20 to the console.

for (let i = 0; i <= 20; i = i + 2) {
  console.log(i);
}
console.log(
  "********************************************************************"
);
/************ Task#3*************** */
//Write a program that uses a for loop to output the Fibonacci sequenceup to a 20 numbers.
//0 1 1 2 3 5 8 13
let final = 0;
let firstNumber = 0;
let secondNumber = 1;
console.log(firstNumber);
console.log(secondNumber);
for (let i = 0; i <= 20; i++) {
  final = firstNumber + secondNumber;
  firstNumber = secondNumber;
  secondNumber = final;
  console.log(final);
}

/************ Task#4*************** */
// Write a program that uses a for loop to output a multiplication table for
// a certain number entered by the user.
const numb = prompt("Enter any Number");
for (let i = 1; i <= 10; i++) {
  console.log(`${numb} * ${i} = ${parseInt(numb) * parseInt(i)}`);
}

/************ Question#2*************** */

function calculateAverageAndDetermineWinner() {
  let dolphinsTotal = 0;
  let koalasTotal = 0;

  for (let i = 1; i <= 3; i++) {
    let dolphinsScore = parseFloat(
      prompt(`Enter Dolphins' score for Game ${i}`)
    );
    let koalasScore = parseFloat(prompt(`Enter Koalas' score for Game ${i}`));

    dolphinsTotal += dolphinsScore;
    koalasTotal += koalasScore;
  }

  const dolphinsAvg = dolphinsTotal / 3;
  const koalasAvg = koalasTotal / 3;

  if (dolphinsAvg > koalasAvg) {
    console.log(
      `Dolphins win due to get higher score ${dolphinsAvg} than Koalas ${koalasAvg}`
    );
    alert(
      `Dolphins win due to get higher score ${dolphinsAvg} than Koalas ${koalasAvg}`
    );
  } else if (koalasAvg > dolphinsAvg) {
    console.log(
      `Koalas win due to get higher score ${koalasAvg} than Dolpins ${dolphinsAvg}`
    );
    alert(
      `Koalas win due to get higher score ${koalasAvg} than Dolpins ${dolphinsAvg}`
    );
  } else {
    console.log(
      `It's a draw! because both get same socore : Koalas's score ${koalasAvg} and Dolphins's score ${dolphinsAvg}`
    );
    alert(
      `It's a draw! because both get same socore : Koalas's score ${koalasAvg} and Dolphins's score ${dolphinsAvg}`
    );
  }
}

calculateAverageAndDetermineWinner();
calculateAverageAndDetermineWinner();
calculateAverageAndDetermineWinner();
