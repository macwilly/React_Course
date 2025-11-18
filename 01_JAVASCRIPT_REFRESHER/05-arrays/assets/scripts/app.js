// Objects are the key valued pairs while arrays just use the indexes
const hobbies = ["Sports", "Cooking", "Reading"];

console.log(hobbies);
console.log(hobbies[0]);
hobbies.push("Running");
let firstIndex = hobbies.findIndex((item)=> {
    return item === "Cooking";
});

let secondIndex = hobbies.findIndex(item => item === "Sports");

console.log(firstIndex);
console.log(secondIndex);

const numbers = [10, 20, 30, 40, 50];

// Find the index of the first number greater than 25

const index = numbers.findIndex(num => num > 25);
console.log(index); // Output: 2 (because 30 is the first number > 25)

// Map allows the developer iterate over the full array and manipulate it. map also will return and array
const awesomeHobbies = hobbies.map(item => item + "!");

// Map is used often in React
hobbies.map((item) => console.log(item));
console.log(awesomeHobbies);
const objectHobbies = hobbies.map(item => ({text: item }));
console.log(objectHobbies);