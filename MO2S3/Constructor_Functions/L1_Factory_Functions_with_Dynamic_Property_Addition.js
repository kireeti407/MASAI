function createInventoryItem(name,catagory,price){
    return{
        name,
        catagory,
        price,
        describeItem:function(){
            console.log(`item:${this.name},catagory:${this.catagory},price:${this.price}`)
        }
    }
}
function addItemDiscount(item,discount){
    return {...item,applyDiscount:function(){
        console.log(`Discount Price for ${this.name} :${this.price-Math.floor((discount/100)*this.price)}`)
        }
    }
}
const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();
// Output: Item: Laptop, Category: Electronics, Price: 1500

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
// Output: Discounted Price for Laptop: 1350
