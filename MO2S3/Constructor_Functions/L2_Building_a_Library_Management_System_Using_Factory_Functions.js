function Book(title,author){
    return {
        title,
        author,
        details:function(){
            console.log(`Title:${title}, Author: ${author}`)
        }
    }
}
function createLibrary(){
    let library=[]
    return {
        addBook:function(book){
            library.push(book)
        },
        listBooks:function(){
            library.forEach((e)=>{
                console.log(`Title:${e.title}, Author: ${e.author}`)
            })
        },
        removeBook:function(title){
            let i=library.findIndex((e)=>e.title==title)
            library.splice(i,1)
        }

    }
}
const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee

