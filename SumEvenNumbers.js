function sumEvenNumbers(numbers){
	let answer = 0;
	for(let num of numbers){
		if(num % 2 == 0){
		answer+= num;
		}
	}

	return answer;
}

module.exports = {sumEvenNumbers};









//console.log(sumEvenNumbers([1,2,3,4,5,6,7,8,9]));
	
	
	