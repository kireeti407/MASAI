function Book(title,authorName){
    let ans = {Title:title,Author:authorName} 
    return {
        details : ()=>{
            return ans
        }
    }
}
function createLibrary(){
    let arr = []
    return {
        addBook : function (bookToBeAdded){
            arr.push(bookToBeAdded)
        },
        removeBook : function (title){
            let newarr=[]
            for(let i=0;i<arr.length;i++){
                if(arr[i].Title!=title){
                    newarr.push(arr[i])
                }
            }
             newarr.length == arr.length ? console.log("Book is not find") : arr = newarr
        },
        listBooks : function(){
            arr.forEach((ele,i)=>{
                let answer = "Title: "+ele.Title+", Author: "+ele.Author 
                console.log(answer)
            })
        }
    }
}
const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1.details());
library.addBook(book2.details());

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
let book3=Book("Jersey","Gowtham Thinnanuri")
library.addBook(book3.details())
library.listBooks()
//Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: Jersey, Author: Gowtham Thinnanuri