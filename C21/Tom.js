function increase(tomScores){
   return tomScores.map((times)=> times + 5);
}
console.log(increase([85,92,78,88,95]))
module.exports = {increase}