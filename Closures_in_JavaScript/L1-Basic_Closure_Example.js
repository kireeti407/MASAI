function outerFunction() {
    let message="Today I learn closure concept"
    return function (){
        console.log(message)
    }
    
}
let closur=outerFunction()
closur()