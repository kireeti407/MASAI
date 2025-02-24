let N=3
let M=2
let arr=[[1,2],[3,4],[5,6]]
for(let i=0;i<N;i++){
    let k=''
    for (let j=0;j<M;j++){
        arr[i][j]=i+j
        k=k+arr[i][j]+' '
    }
    console.log(k)
}
