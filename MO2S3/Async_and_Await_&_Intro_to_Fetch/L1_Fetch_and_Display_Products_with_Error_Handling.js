async function FakeStoreAPI(){
    try{
        let res=await fetch('https://fakestoreapi.com/products')
        let data=await res.json()
        let sum=data.reduce((acc,e)=>acc+=e.price,0)
        console.log(sum)
    }
    catch(err){
        console.log("Failed to fetch products. Please try again later")
    }
}
FakeStoreAPI()