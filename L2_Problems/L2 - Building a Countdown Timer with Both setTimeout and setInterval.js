function timer(seconds,duration=100){
    
    let time = seconds
    let v=0
    let id= setInterval(()=>{
      if(v==1){
        clearInterval(id)
        console.log("Completed whith char")
        return 
      }
      else if(time>0){
      console.log("Present time is: "+time+" seconds and Remainig time is: "+ (time-1)+" seconds")
        
      }
      else{
        clearInterval(id)
          console.log("Countdown complete!")
      }
      time-=1
    },duration)
    setTimeout(()=>{
      stopwithchar("c")
    },200)
    function stopwithchar(s){
        let str="abcdefghijklmnopqrstuvwxyz"
        if(str.includes(s)){
            v=1
        }         
  }
  }
  timer(10)