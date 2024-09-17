const person = {
	firstName: "david",
	lastName: "ojo",
	fullName: function(){
		return this.firstName + " " + this.lastName;
		
		}

}


console.log(person.fullName())