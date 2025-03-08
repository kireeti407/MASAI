let arr=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
let res=arr.reduce((obj,e)=>{
    (obj[e])?obj[e]++:obj[e]=1
    return obj
},{})
console.log(res)