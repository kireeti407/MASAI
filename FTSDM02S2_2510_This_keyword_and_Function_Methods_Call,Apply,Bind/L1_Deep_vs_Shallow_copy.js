let orginal={ name: "Alice", hobbies: ["reading", "traveling"] }
let deepcopy=JSON.parse(JSON.stringify(orginal))
deepcopy.hobbies.push("coding")
console.log(`orginal:`,orginal)
console.log(`clone:`,deepcopy)