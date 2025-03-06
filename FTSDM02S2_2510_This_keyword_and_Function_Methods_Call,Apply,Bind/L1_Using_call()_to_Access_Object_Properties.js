function  personInfo(){
    console.log(`name:${this.name} and age:${this.age}`)
}
let perinfo={
    name:"Kireeti",
    age:21
}
personInfo.call(perinfo)