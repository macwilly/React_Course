const hobbies = ["Sports", "Cooking"];

const newHobbies = ["Reading"];
//Spread is the ...
// Spread will pull the values out of the arrays and add them to the new array
const mergeHobbies = [...hobbies, ...newHobbies];
console.log(mergeHobbies);
// The array .concat() function works the same way
const thirdHobbies = hobbies.concat(newHobbies);

console.log(thirdHobbies);

// doing spread with objects
const user = {
    firstName: "John",
    lastName: "Doe"
}
// Use the spread operator plus the object name
const extendedUser = {
    isAdmin: true,
    ...user
};
console.log(extendedUser);

