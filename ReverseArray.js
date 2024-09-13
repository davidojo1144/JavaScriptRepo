function reverseArray(arr){
	let newArr = [];
	for(let count = arr.length - 1; count >= 0; count--){
		newArr.push(arr[count]);
	}

return newArr;

}


module.exports = {reverseArray};
	
	
