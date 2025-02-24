// function DiscountPriceCalculator(price,discount=0){
//     price=price-(discount/100)*price


//     if (price>20){
//         console.log("The final price of the item is:",price)
//     }
//     else if(price>-1){
//         console.log("The final price of the item is:",price)
//     }
//     else{
//         console.log("Invalid price, the price must be a non-negative number.")
//     }
// }
// DiscountPriceCalculator(25)
// DiscountPriceCalculator(20)
// DiscountPriceCalculator(15)

var d={}
let arr=[999,87,65,443,767,8989,999,999,767]
for (i of arr){
    if (!d[i]){
        d[i]=1
        continue
    }
    d[i]+=1
}
d[99]=2
console.log(d)
t=-Infinity
r=''
for (i in d){
    if (d[i]>t){
        t=d[i]
        r=i
    }
}
console.log(r,i)
