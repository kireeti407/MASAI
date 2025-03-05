function chaining(obj){
  let id=obj?.id
  let name=obj?.profile?.name
  let city=obj?.profile?.address?.city
  let zipcode=obj?.profile?.address?.zipcode
  id =(id==null || id==undefined)?"Information not available":id
  name =(name==null || name==undefined)?"Information not available":name
  city=(city==null || city==undefined)?"Information not available":city
  zipcode =(zipcode==null || zipcode==undefined)?"Information not available":zipcode
  return `User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`
}
console.log(chaining( { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } }))
console.log(chaining( { id: 123, profile: { name: "John Doe" } }))