function LargerNumberIdentifier(num1,num2){
    if (num1>num2){
        return `${num1} is larger than ${num2}`
    }
    else if(num1==num2){
        return `Both numbers are equal`
    }
    else{
        return `${num1} is smaller than ${num2}`
    }
}
console.log(LargerNumberIdentifier(5,10))
console.log(LargerNumberIdentifier(7,7))
console.log(LargerNumberIdentifier(-1,-10))