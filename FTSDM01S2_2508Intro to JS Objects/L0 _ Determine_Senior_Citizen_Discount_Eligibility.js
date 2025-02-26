function Check(age){
    if (age>60){
        console.log("Eligible for Senior Discount")
    }
    else if(age>0){
        console.log("Not Eligible for Senior Discount")
    }
    else{
        console.log("Invalid Age")
    }
}
Check(65)
Check(-1)
Check(20)