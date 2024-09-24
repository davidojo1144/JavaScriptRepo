function keep(expenses){
    let total = 0;
    for(let key in expenses){
        if(expenses.hasOwnProperty(key)){
            total+= expenses[key]
        }
    }

    return total

}

console.log(keep({"groceries": 150, "dining out": 100,"transportation": 50, "entertainment": 80}))
module.exports = {keep}