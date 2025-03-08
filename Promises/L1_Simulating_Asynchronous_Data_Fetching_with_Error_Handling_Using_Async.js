
function fetchDataHandler(fetchData){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (fetchData()){
        resolve("Fetched data successfully!")
    }
    else{
        reject( "Error fetching data")
    }
    },0)
})
}
fetchDataHandler(()=>{
    return Math.random()>0.5?true:false
})
.then((msg)=>{
    console.log(msg)
})
.catch((err)=>{
    console.log(err)
})
