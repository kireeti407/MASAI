function MaxNum(n1,n2,n3){
    if (n1<n3 && n2<n3){
        console.log(n3)
    }
    else if(n1<n2 && n3<n2){
        console.log(n2)
    }
    else{
        console.log(n1)
    }
}
let num1 = 45
let num2 = 78
let num3 = 33
MaxNum(num1,num2,num3)
