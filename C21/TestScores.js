function testing(testScores){
    return testScores.filter((score) => score >= 70);
}

console.log(testing([12,34,78,90,56,78,45,23,45,70]))
 module.exports = {testing}