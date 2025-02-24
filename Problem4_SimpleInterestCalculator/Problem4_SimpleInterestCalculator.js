function Interest(P,R,T){
    var Z=(P *R * T)/100
    if (Z>=0){
        console.log(`The simple interest is:${Z}.0`)
        return
    }
    console.log("Invalid input, all values must be non-negative.")
}
Interest(1000,5,3)
Interest(1500,7,5)
Interest(0,6,2)