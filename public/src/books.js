const findAuthorById = (authors, id) => {
  /*The .find() method will look through the authors array and returns an object with the id that matches the input*/
  return authors.find(author => author.id === id)
}

function checkAuthorById(authors){
  console.log(findAuthorById(authors, 0))
}

const findBookById = (books, id) => {
/*The .find() method will look through the books array and returns an object with the id that matches the input*/
  return books.find(book => book.id === id)
}
/*
const partitionBooksByBorrowedStatus = books => {
  let partition = [];
  for(let i = 0; i < books.length; i++){
    for(let j = 0; j < books[i].length; i++){
      let book = books[i];
      if(book.returned === true){
        partition.push(book[returned]);
      }if(book.returned === false){
        partition.push(book[returned]);
    }
    }
  }
  return partition;
}
*/
/*The .filter() method will look through the books array and compile a new array that meets our condition.*/
const partitionBooksByBorrowedStatus = books => {
   let booksReturned = books.filter((book) =>
     book.borrows.every((borrow) => borrow.returned === true)
 );
/*Within the filter method we will use a helper function with the every method that will check if our condition is true within the borrow array.*/
 
/*The .filter() method will look through the books array and create a new 
 array that meets our condition.*/
  let booksBorrowed = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
 );
 /*Within the filter method we will use a helper function with the .some() method that will check if our condition is true within the borrow array.*/
  
  let finalArray = [[...booksBorrowed], [...booksReturned]];
    return finalArray;
}

const getBorrowersForBook = (book, accounts) => {
  return book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
      return {...borrow, ...account};}).slice(0, 10);
}


checkAuthorById()

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
