const findAccountById = (accounts, id) => {
  return accounts.find(person => person.id === id); 
}

 


const sortAccountsByLastName = accounts => {
/* The .sort() method sorts the accounts array based on our set condition*/
  return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
}


const getTotalNumberOfBorrows = (account, books) => {
  // create a variable for the value for id essentially allowing you to call the value specifically.
  const { id: accId } = account;
  // return a reduced version of books
  return books.reduce((total, book) => {
    // return the total borrows to the accumulator ()
    return (
      total + book.borrows
      // filter through to find which account borrowed which book by id
        .filter(borrow => borrow.id === accId)
      // reduce the borrowed books to a number total of all the borrowed books
        .reduce((totalBorrows, borrow) => totalBorrows + 1, 0)
    );
  }, 0);// Assigns the type to the reduced array in this case: number
}

const getBooksPossessedByAccount = (account, books, authors) => {
 
 let result = [];
 let borrowMatch = [];
   books.forEach((item) => {
    const borrowed = item.borrows;
    const book = {
       id: item.id,
       title: item.title,
       genre: item.genre,
       authorId: item.authorId,
         author: {},
         borrows: {}
        };
   const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
   if(borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    borrowMatch.push(borrow);
    book.borrows = borrowMatch;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
 });
 return result;
  
}
/*
const getBooksPossessedByAccount = (account, books, authors) => {
  
  let id = authors.id;
  
  let result = [];
   books.forEach(books.filter((book) => book.id === accId && Object.keys(returned === false)));
}
*/

/*
const getBooksPossessedByAccount = (account, books, authors) => {
  const { id: accId } = account;
  const author = {
    name: {
      first: authors.name.first,
      last: authors.name.last,
    },
    borrows:[{
      id: accId,
      returned: books.borrows.returned
    },
    ...]
  };
  let result = [];
  let borrowed = [];
  const bookObject = books.reduce((book, accId) => {accId = books.find((book) => book.borrows.id === account.id && book.borrows.returned === false)}, {});
  bookObject.push(bookObject);
  return result;
}
*/
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
