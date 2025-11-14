// basic function
let userName = "MackenzieWillard";
function greet(userName = "") {
    return "Hello World! " + userName;
}
console.log(greet(userName));

// arrow function from export
import greetTwo from "./arrow-functions.js";

console.log(greetTwo("Mac"));
