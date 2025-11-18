// Relatively new JavaScript feature of destructing arrays and objects
const userNameData = ["Mackenzie", "Willard"];
// could get both of these by using their array indexes [0] [1]
// const firstName = userNameData[0];
// const lastName = userNameData[1];

// by placing brackets around the variables we want to create we deconstruct the array and assign them. They can
// be named whatever the developer would like
const [firstName, lastName] = ["Mackenzie", "Willard"];

console.log(firstName);
console.log(lastName);

// This can also be used on objects
const user = {
    "firstNameObj": firstName,
    "lastNameObj": lastName,
    "ageObj": 35
};
//   | |
//    V
// const firstName = user.firstNameObj;
// const lastName = user.lastNameObj;
// const age = user.ageObj;

// by placing curly braces around the variables we want to create we deconstruct the object and assign them. The names
// must match what is the key in the object. You can also assign and alias. <objectKeyName>: <alias>.
// Also, you do not need to name all the object properties. But if it is unnamed it is unused.
const {firstNameObj, lastNameObj: lastN } = {
    "firstNameObj": firstName,
    "lastNameObj": lastName,
    "ageObj": 35
};
console.log(firstNameObj);
console.log(lastN);
