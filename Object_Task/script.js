console.log("Ayesha Manzoor");
console.log("Object_Task");

// Full Stack Web Development Bootcamp

// Coding Challenge
// Objects

// *******************QUESTION#01******************/

let car1 = { Make: "Honda", Model: "Civic", Year: 2019 };
let car2 = { Make: "Toyota", Model: "Camry", Year: 2020 };
let car3 = { Make: "Ford", Model: "Mustang", Year: 2018 };
console.log(car1);
console.log("----Car 1:----");
console.log(`Make: ${car1.Make}`);
console.log(`Model: ${car1.Model}`);
console.log(`Year: ${car1.Year}`);
console.log();

console.log(car2);
console.log("----Car 2:----");
console.log(`Make: ${car2.Make}`);
console.log(`Model: ${car2.Model}`);
console.log(`Year: ${car2.Year}`);
console.log();

console.log(car3);
console.log("----Car 3:----");
console.log(`Make: ${car3.Make}`);
console.log(`Model: ${car3.Model}`);
console.log(`Year: ${car3.Year}`);

// *******************QUESTION#02******************/
// --------------Part#01------------------
let title = String(prompt("Enter the Book name:"));
let author = String(prompt("Enter the author name:"));
let noOfPages = Number(prompt("Enter the No of pages:"));
let bookInfo = {
  title: title,
  author: author,
  noOfPages: noOfPages,
};

console.log(bookInfo);
console.log("----Book Information:----");
console.log(`title: ${bookInfo.title}`);
console.log(`author: ${bookInfo.author}`);
console.log(`noOfPages: ${bookInfo.noOfPages}`);

// --------------Part#02------------------

let peopleArray = [
  { name: "sadia", age: 25 },
  { name: "sajid", age: 28 },
  { name: "majid", age: 18 },
  { name: "sajjad", age: 21 },
  { name: "manzoor", age: 55 },
  { name: "aleena", age: 22 },
];

let findOldestPerson = (people) => {
  if (people.length === 0) {
    return "No people present in array";
  }
  let oldPeople = people[0];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age > oldPeople.age) {
      oldPeople = people[i];
    }
  }
  return oldPeople;
};

let oldestPerson = findOldestPerson(peopleArray);
console.log(oldestPerson);
console.log("----Oldest Person:----");
console.log(`name: ${oldestPerson.name}`);
console.log(`age: ${oldestPerson.age}`);
console.log();

// --------------Part#03------------------
let movieInfo = () => {
  let title1 = String(prompt("Enter the title name of movie:"));
  let director = String(prompt("Enter the director name:"));
  let year = Number(prompt("Enter the year:"));
  let movieDetail = { title: title1, director: director, year: year }; // Use an object, not an array
  return movieDetail;
};

let movies = [];
for (let i = 0; i < 3; i++) {
  let moviesDetail = movieInfo();
  movies.push(moviesDetail);
}

movies.sort((a, b) => a.year - b.year);

console.log("----Movies Sorted by Year:----");
for (let movie of movies) {
  console.log("Title:", movie.title);
  console.log("Director:", movie.director);
  console.log("Year:", movie.year);
  console.log();
}

// --------------Part#04------------------

let totalPrice1 = () => {
  let name = String(prompt("Enter the name of product:"));
  let price = Number(prompt("Enter the price:"));
  let totalPrice = { name: name, price: price };
  return totalPrice;
};

let products = [];
for (let i = 0; i < 4; i++) {
  let sum = 0;
  let productDetail = totalPrice1();
  products.push(productDetail);
  products[i];
}

let calculateTotalPrice = (products) => {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
  }

  return totalPrice; // Return the total price
};
console.log("----Product Information:----");
for (let product of products) {
  console.log("Name:", product.name);
  console.log("Price:", product.price);
  console.log();
}
const totalPrice = calculateTotalPrice(products);
console.log("Total Price of Items:", totalPrice);
