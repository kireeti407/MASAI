
function calculateFinalResult(confirmationNumber){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let extra=Math.floor(Math.random()* (99- 10 + 1)) + 10
            console.log(`Confirmation Number: ${confirmationNumber}`)      //returns the promise
            console.log(`Extra Number: ${extra}`)
            let finalResult=confirmationNumber+extra 
            res(finalResult)
        },2000)
    })
}
function confirmOrder(processingCode){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(`Processing Code: ${processingCode}`)
            let confirmationNumber=Math.floor(Math.random()* (99- 10 + 1)) + 10  // return the promise
            res(confirmationNumber)
        },2000)
    })
}
function processOrder(orderId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(`Order ID: ${orderId}`)
            let processingCode=Math.floor(Math.random()* (99- 10 + 1)) + 10 //here i use random for generating random number from 10 to 99
            res(processingCode)
        },2000)
    })
}
function placeOrder(){ // this fuction is return the promise so i use .then()
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let orderId=Math.floor(Math.random()* (99- 10 + 1)) + 10 
            res(orderId) // the promise is fullfill so resolve funtion will triger and send argument orderId
        },2000)
    })
}
placeOrder() // this fuction is return the promise so i use .then()
  .then((orderId) => processOrder(orderId)) // .then() is for placeOrder function in callback have a another function processOrder
  .then((processingCode) => confirmOrder(processingCode))  // In callback function i call processingcode()
  .then((confirmationNumber) => calculateFinalResult(confirmationNumber))  // in callback i call calculateFinalResult()
  .then((finalResult) => console.log(`Final Result: ${finalResult}`)) //this is final .then() for calculateFinalResult()
  .catch((error) => console.log(`Error: ${error}`));//If any err it will triger