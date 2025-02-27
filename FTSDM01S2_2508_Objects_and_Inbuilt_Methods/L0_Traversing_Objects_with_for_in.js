let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };
let res=''
for(let i in book){
    res=res+i+":"+book[i]+' '
}
console.log(res)