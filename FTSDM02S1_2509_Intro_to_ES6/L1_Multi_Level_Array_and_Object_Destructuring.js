const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ]
let k=people.map((e)=>{
    let {name,address:{city,street:{name:street_name}}}=e
    return `${name} lives in ${city} on ${street_name}`
})
console.log(k)