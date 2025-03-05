const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };
const updates = { name:"kiyotaka" ,age: 30, address: { zipcode: "94109", country: "USA" } };
updates.address={...profile.address,...updates.address}
console.log({...profile,...updates})