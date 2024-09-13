function findFirstDuplicate(arrayOfNumbers){
	let minusOne = -1;
	for(let num = 0; num < arrayOfNumbers.length; num++){
		for(let number = arrayOfNumbers.length - 1; number >= 0; number--){
			if(num == number){
				continue;
			}

	
				if(arrayOfNumbers[num] == arrayOfNumbers[number]){
					answer = arrayOfNumbers[num];
					return answer
				}


		}
	}
	return minusOne


}

module.exports = {findFirstDuplicate};

