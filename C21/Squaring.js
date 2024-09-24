function square(userInput){
    return userInput.map((itself)=> itself * itself);
}

console.log(square([2,4,6,8,10]))
module.exports = {square}