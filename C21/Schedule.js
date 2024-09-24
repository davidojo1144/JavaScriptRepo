function planning(time){
    return time.filter((check)=> check.includes("PM"));
}

console.log(planning(["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]))
module.exports = {planning}