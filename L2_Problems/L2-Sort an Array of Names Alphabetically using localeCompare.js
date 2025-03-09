
function sortNames(namesArray){
    namesArray.sort((a,b)=>(a.localeCompare(b)))
    console.log(namesArray)
}

let input = ["Charlie", "Alice", "Bob"] 

sortNames(input)