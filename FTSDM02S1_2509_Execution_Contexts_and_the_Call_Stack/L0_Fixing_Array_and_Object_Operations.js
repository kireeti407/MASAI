const library = {

    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    
    addBook(book) {
    
    if (!book.title || !book.author || !book.year) {
    
    console.log("Book information is incomplete.");
    
    return;
    
    }
    this.books.push(book);
    
    },
    
    findBookByTitle(title) {
    let index= this.books.findIndex(book => book.title === title);
    if (index !==-1){
        console.log(this.books[index])
    }
    else{
        console.log("Book is not exist")
    }
    },
    
    removeBook(title) {
    
    const index = this.books.findIndex(book => book.title === title);
    
    if (index !== -1) {
    
    this.books.splice(index, 1);
    
    } else {
    
    console.log("Book not found.");
    
    } } };
    
    library.addBook({ author: "George Orwell", year: 1949 });
    library. findBookByTitle("The Hobbit")
    console.log(library.books.length);