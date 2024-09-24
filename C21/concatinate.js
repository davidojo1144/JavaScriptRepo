function add(input){
    let input2 = input[0] + input[1];
    let input3 = input[2] + input[3];
    let input4 = input[4] + input[5];

    let arr = []
        arr.push(input2,input3,input4)
    return arr
    }

    module.exports = {add}

console.log(add([1,3,5,1,6,3]))
