let obj={
    arr1:[1,2,3,4,5,6,4,88,90,77],
    arr2:[2,3,4,2,5,6,7,8,8,9,90,24],
    filterEvenNumbers:function(){
        let k=this.arr1.filter((e)=>e%2==0)
        return k
    },
    sumOfArray:function(){
        return this.arr1.reduce((acc,e)=>acc+=e,0)
    },
    sortAndConcat:function(){
        let a1=this.arr1.sort((a,b)=>a-b)
        let a2=this.arr2.sort((a,b)=>a-b)
        return a1.concat(a2)
    }
}
console.log(obj.filterEvenNumbers())
console.log(obj.sumOfArray())
console.log(obj.sortAndConcat())