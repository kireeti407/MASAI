function multiplyNumber(a,b){
    return this.r=a*b
}
let dic={
    r:0 
}
console.log(multiplyNumber.apply(d,[3,5]))