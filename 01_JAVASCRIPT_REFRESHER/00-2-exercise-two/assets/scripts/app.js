// Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers
// into a list of JavaScript objects.
// In the newly returned array, every object must have a "val" key and the input array's number as a value.
//
// Example [1,2,3] should return [{val:1}, {val:2}, {val:3}]


function transformToObject(numberArray) {
    return numberArray.map(number => ({"val": number}));
}

console.log(transformToObject([1,2,3]));