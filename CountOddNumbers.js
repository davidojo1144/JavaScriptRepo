function countOddNumbers(oddNumbers){
	let count = 0;
	for(let num of oddNumbers){
		if (num % 2 != 0){
		count++;
		}

	}

	return count;
}

module.exports = {countOddNumbers};
	