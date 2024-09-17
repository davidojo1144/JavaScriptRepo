function findMax(numbersOfArrays){
	let max = numbersOfArrays[0];
	for(let num of numbersOfArrays){
		if(numbersOfArrays[num] > max){
		max = numbersOfArrays[num];
		}
	}
	
	return max;

}

module.exports = {findMax};
	