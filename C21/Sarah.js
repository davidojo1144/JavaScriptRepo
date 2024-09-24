function distribute(members){
    let sarahObj = {};
    let book = ["book1", "book2", "book3", "book4"]
    for(num in members){
        sarahObj[members] += (sarahObj[book]|| 0) //+  book
    }

    return sarahObj
}


console.log(distribute("Emily", "jack", "sophia", "daniel"))


