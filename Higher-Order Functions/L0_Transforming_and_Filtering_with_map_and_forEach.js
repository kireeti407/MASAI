function processProducts(product){
    product.map((e)=>{
        return e.name
    })
    .forEach((e,i) => {
        console.log(e +((product[i].price>50)?" is above":" is below"),"$50")   
    });
}
let Input=[{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
processProducts(Input)