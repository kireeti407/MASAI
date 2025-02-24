let arr=[[1,2,3,0],[4,5,6,0],[7,8,9,0]]
k=''
for (let i=arr.length-1;i>-1;i--){
    k=k+arr[i][0]+' '
}
for(let i=1;i< arr[0].length;i++){
    k=k+arr[0][i]+' '
}
for(let i=1;i<arr.length;i++){
    k=k+arr[i][arr[0].length-1]+' '
}
for(let i=arr[0].length-2;i>0;i--){
    k=k+arr[arr.length-1][i]+' '
}
console.log(k)