function InventoryManagementSystem(product){
    return product.filter((e)=>{
        return (e.stock<100)
    })
    .map((e)=>{
        return {name:e.name,category:e.category,totalReorderCost:(e.pricePerUnit*(100-e.stock))}
    })
    .reduce((obj,e)=>{
        (obj[e.category])?obj[e.category]+=e.totalReorderCost:obj[e.category]=e.totalReorderCost
        return obj
    },{})
}
let product=[
{ name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },

{ name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },

{ name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },

{ name: "Jeans", category: "Clothing", stock: 80, pricePerUnit: 40 },

{ name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 } 
]
console.log(InventoryManagementSystem(product))