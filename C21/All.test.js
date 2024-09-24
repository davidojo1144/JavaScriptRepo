const {conca} = require("./conca.js");

test("return conca", ()=>{
	let concatin = ([2,3,4,5,6,7]);
	let result = conca(concatin);
	expect(result).toEqual([5,9,13]);
})

const {add} = require("./concatinate.js");

test("return add", ()=>{
	let concatinate = ([1,3,5,1,6,3]);
	let result = add(concatinate);
	expect(result).toEqual([4,6,9]);
})



const {countElement} = require("./Element.js");

test("return count", ()=>{
    let counting = ([1,1,2,3,2]);
	let answer = countElement(counting);
	expect(answer).toEqual({"1":2, "2":2, "3":1});
})



const {testing} = require("./TestScores.js");

test("return test", ()=>{
    let getTest = ([12,34,78,90,56,78,45,23,45,70]);
    let result = testing(getTest);
    expect(result).toEqual([ 78, 90, 78, 70 ])

})




const {increase} = require("./Tom.js");

test("return increase", ()=>{
    let increasing = ([85,92,78,88,95]);
    let result = increase(increasing);
    expect(result).toEqual([ 90, 97, 83, 93, 100 ])

})




const {square} = require("./Squaring.js");

test("return itself", ()=>{
    let itself = ([2,4,6,8,10]);
    let result = square(itself);
    expect(result).toEqual( [ 4, 16, 36, 64, 100 ])

})



const {keep} = require("./Grocery.js");

test("return total", ()=>{
    let total = ({"groceries": 150, "dining out": 100,"transportation": 50, "entertainment": 80});
    let result = keep(total);
    expect(result).toEqual(380)

})




const {planning} = require("./Schedule.js");

test("return checkingTime", ()=>{
    let check = (["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]);
    let result = planning(check);
    expect(result).toEqual([ '1:00 PM', '3:00 PM', '5:00 PM' ])

})



	

