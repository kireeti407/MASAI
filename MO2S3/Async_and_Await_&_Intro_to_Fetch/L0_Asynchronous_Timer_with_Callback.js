function timer(onComplete){
    setTimeout(()=>{
        onComplete(2000)
    },2000)
}
timer((duration)=>{
    console.log(`Timer of ${duration} ms finished`)
})