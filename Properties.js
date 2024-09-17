function property(name){

	for(let num in car){
	console.log(num, name[num]);
	}

}

	const car = {
		make: "Toyota", 
		model: "Camry", 
		year: 2021
		}

		
	property(car);

	
