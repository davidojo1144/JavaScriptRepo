function verify(cardNumber){

	let number = "";
	for(count = 0; count < cardNumber.length; count++){
	if(cardNumber[count] != "-"){
 	number += cardNumber[count];
	}
	}

	if(cardNumber.length == 16){
	if(cardNumber.startsWith("4") || cardNumber.startsWith("5") || cardNumber.startsWith("6")){
	return true;
	}
	}

	else{
	return false;
	}

}

console.log(verify("6234-5678-7654-3567"))















	



		



