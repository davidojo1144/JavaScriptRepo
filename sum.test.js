const {add, subtract, evenNumbers} = require("./MyJavaScript.js");

let numberOne = 2;
let numberTwo = 29;


test("Add two numbers", ()=>{
	let result = add(numberOne, numberTwo);
	let expected = 31;
	expect(result).toBe(expected);
})

test("subtract two number", ()=>{
	let result = subtract(numberOne, numberTwo);
	let expected = 27;
	expect(result).toBe(expected);
})


test("return evenNumbers", ()=>{
	let arrayOfNumbers = [1,2,3,4,5,6];
	let result = evenNumbers(arrayOfNumbers);
	expect(result).toEqual([2,4,6]);
})
