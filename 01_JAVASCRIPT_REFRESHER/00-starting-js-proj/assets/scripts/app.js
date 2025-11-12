// import is like use or include/require from php
// with vanilla js you need to include the .js for the file. often with React it is left off because the
// build process will manage it.
import {apiKey} from "./util.js";

// when importing a default value, you must assign a name on the import
import apiKeyTwo from "./default_export.js"
import {cheese} from "./default_export.js"
console.log(apiKey);
console.log(apiKeyTwo);
console.log(cheese);