function countElement(element){
    var numbers = {}
    for(let num of element){
        numbers[num] = (numbers[num]||0) +1
    }

     return numbers;
}
let num = [1,1,2,3,2]
console.log(countElement(num))
module.exports = {countElement}