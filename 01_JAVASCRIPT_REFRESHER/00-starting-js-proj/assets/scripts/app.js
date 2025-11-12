// import is like use or include/require from php
// with vanilla js you need to include the .js for the file. often with React it is left off because the
// build process will manage it.
import {apiKey} from "./util.js";

// when importing a default value, you must assign a name on the import
import apiKeyTwo from "./default_export.js"
import {cheese} from "./default_export.js"

// With multiple named exports you can import all through a csv list
// You can also alias as you are importing.
// import {cheeseTwo, cheeseThree as theBigCheese} from "./multiple_named_exports.js"

// Also you are able to import all exports from a file as a JavaScript object
import * as moreCheese from "./multiple_named_exports.js";
console.log(apiKey);
console.log(apiKeyTwo);
console.log(cheese);
console.log(moreCheese);
console.log(moreCheese.cheeseTwo);
console.log(moreCheese.cheeseThree);

/*
console.log(cheeseTwo);
console.log(theBigCheese);
 */