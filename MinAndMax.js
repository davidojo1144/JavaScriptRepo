function outterFunction(digitOne, digitTwo){
	console.log("outter function");
	function innerFunction(){
		return digitOne * digitTwo;
	}
	return (innerFunction());
}
console.log(outterFunction(2,3));



function calculate(){
	return{
		add:function(a,b){
			return a + b;
		},
		subtract:(a,b)=>{
			a - b;
		}
	};
};

let result = calculate();
console.log(result.add(1,2))
console.log(result.subtract(5,2))


