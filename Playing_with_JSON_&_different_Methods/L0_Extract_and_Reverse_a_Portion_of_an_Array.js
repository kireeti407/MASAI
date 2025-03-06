function extractAndReverse(){
    return arr.slice(3,6).reverse()
}
let arr=[15, 30, 45, 60, 75, 90]
let subarr=extractAndReverse(arr)
console.log(subarr)