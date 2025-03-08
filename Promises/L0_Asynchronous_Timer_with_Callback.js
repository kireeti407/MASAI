function timer(oncomplete,duration){
    setTimeout(()=>{
        oncomplete(duration)
    },duration)
}
timer((duration)=>{
    console.log(`Timer of ${duration} ms finished`)
},2000)