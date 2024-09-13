function factorial(number){
	let result = 1;
	for(let count = number; count > 0; count--){
	result *= count;
	}
	return result;
}

module.exports = {factorial};
	