const userName = 'Mac';
const age = 30;
const pet ='Zozo';

// As and object

const user = {
    name: 'John',
    age: 28,
    pet: pet,
    greet (oName){
        console.log(`Hello ${oName}`);
        return `Hello ${this.name}`;
    }
};
console.log(user);
// Use dot notation to access object properties
console.log(user.name);
console.log(user.greet("Steve"));