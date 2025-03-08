console.log("Loading...")
let clearid=setInterval(()=>{
    console.log("loaded successfully")
    clearInterval(clearid)
},5000)