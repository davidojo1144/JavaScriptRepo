function conca(input){
    let input2 = input[0] + input[1];
    let input3 = input[2] + input[3];
    let input4 = input[4] + input[5];

    let arr = []
        arr.push(input2,input3,input4)
    return arr
    }

    module.exports = {conca}


    

console.log(conca([2,3,4,5,6,7]))




//let arr = [3,4,5,6,7,8];
//let fruits = ["banana", "orange", "pear"]



function evenNumber(arr){
    return arr.filter((number)=>{return  number % 2 == 0})


}

//console.log(evenNumber([3,4,5,6,7,8]))

function getFruitLength(array){
    let answer = array.filter((fruit)=> fruit.length > 5)
        return answer;

}


function multiplyByTwo(array){
    let result = array.map((number) => number * 2)
    return result;
}


