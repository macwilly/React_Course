//This function inception is not common is vanilla JS but is common with React

function init() {
    // This function greet is scoped inside of init() and can only be called from inside init()
    function greet() {
        console.log("Hello World!");
    }
    greet();
}

init();