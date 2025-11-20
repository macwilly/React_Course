function handleTimeOut(){
    console.log("Time Out");
}

const handleTimeOut2 = () => {
    console.log("Time Out2");
};

//When passing the function or arrow function as a value and not entering it directly to the call back area
// you only use the name as the is passing the actual function and not the return of the function

setTimeout(handleTimeOut,100);
setTimeout(handleTimeOut2,300);
setTimeout(() => {console.log("Time Out3");}, 3000);


function greeter(greetFn){
    greetFn();
}

greeter(() => {console.log("Hi");});