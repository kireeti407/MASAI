let N=5
let M=4
arr=[[1,2,3,4,5],[6,7,8,9,1],[3,2,5,4,6],[7,8,9,1,2]]
let k=''
c=0
for(let i of arr){
    c%2==0?k=k+(i.reverse().join(' '))+' ':k=k+(i.join(' '))+' '
    c++
}
console.log(k)
