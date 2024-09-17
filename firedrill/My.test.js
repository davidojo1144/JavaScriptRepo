const {sumEvenNumbers} = require("./SumEvenNumbers.js");

test("return sumEvenNumbers", ()=>{
	let evenNumbers = [1,2,3,4,5,6,7,8,9];
	let result = sumEvenNumbers(evenNumbers);
	expect(result).toEqual(20);
})




const {findMax} = require("./FindMax.js");

test("return findMax", ()=>{
	let maxNumbers = [1,2,3,4,5,6,7,8,9];
	let result = findMax(maxNumbers);
	expect(result).toEqual(9);
})




	
const {countOddNumbers} = require("./CountOddNumbers.js");

test("return countOddNumbers", ()=>{
	let oddNumbers = [2,3,5,7,13,13,9,7];
	let result = countOddNumbers(oddNumbers);
	expect(result).toEqual(7);
})




const {isPrime} = require("./IsPrime.js");

test("return isPrime", ()=>{
	let primeNumbers = (7);
	let result = isPrime(primeNumbers);
	expect(result).toEqual(true);
})




const {findFirstDuplicate} = require("./FindFirstDuplicate.js");

test("return findFirstDuplicate", ()=>{
	let firstDuplicate = [1,2,6,7,6,9,10];
	let result = findFirstDuplicate(firstDuplicate);
	expect(result).toEqual(6);
})



const {reverseArray} = require("./ReverseArray.js");

test("return reverseArray", ()=>{
	let reversing = [1,4,2,3,7];
	let result = reverseArray(reversing);
	expect(result).toStrictEqual([7,3,2,4,1]);
})




const {factorial} = require("./Factorial.js");

test("return factorial", ()=>{
	let factors = (5);
	let result = factorial(factors);
	expect(result).toEqual(120);
})



const {isPalindrome} = require("./IsPalindrome.js");

test("return isPalindrome", ()=>{
	let palin = ("racecar");
	let result = isPalindrome(palin);
	expect(result).toEqual(true);
})






















