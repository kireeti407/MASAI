async function webpage(){
    let res=await fetch('https://jsonplaceholder.typicode.com/users')
    let data=await res.json()
    return data
}
webpage().then((data)=>{
    data.forEach(e=> {
        console.log(e.name)
    });
})