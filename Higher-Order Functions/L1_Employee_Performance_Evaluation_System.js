function employee(details){
    return details.filter((e)=>{
        return (e.tasksCompleted>5)
    })
    .sort((a,b)=>b.rating-a.rating)
    .map((e)=>{
        return (e.rating>=4.5)?{name:e.name,performance:"Excellent"}:(e.rating>3)?{name:e.name,performance:"Good"}:{name:e.name,performance:"Needs Improvement"}
    })
    .filter((e)=>{
        return (e.performance!=="Needs Improvement")
    })
}
let details= [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 }, 
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
]
console.log(employee(details))