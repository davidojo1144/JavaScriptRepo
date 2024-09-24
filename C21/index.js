let array = [1,2,3, "david", 7,8]; //array literal
//console.log(array); 

let newArray = new Array(3);
newArray[0] = 10;
newArray.push(2);
newArray.push(3);
newArray.push(4);
newArray.push(5);

//console.log(newArray);

let result = Array.from("semicolon");
//console.log(result);

let answer = Array.of(1,2,3,4,3,5,6,7,8,90)
//console.log(answer);


let arraysOfNumbers = [78,34,56,23,12,89];
let slice = arraysOfNumbers.slice(2,4);
//console.log(slice);


let arr = [23,4,55] // ...arr = spread operator
let numbers = [78,34,56,23,12,89, ...arr];
let spliceNumber = numbers.splice(3,3,10,7,15);
console.log(spliceNumber);
console.log(numbers);

//let arr = [3,4,5,6,7,8];
//let fruits = ["banana", "orange", "pear"]








