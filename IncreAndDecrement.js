const counter = {
	count: 0,
	step: 1,

	increment: function (){
	return this.count += this.step;
	},

	decrement: function (){
	return this.count -= this.step;
	}


		
}

console.log(counter.decrement());
	
	