function fact(n){
    if (typeof (n*1) === 'number' && n>=0){
        if (n==1 ||n==0){
            return n
        }
        return n*fact(n-1)
    }
    return 'give valid number'
}
console.log(fact(7))
console.log(fact(-2))
console.log(fact('jhjj'))