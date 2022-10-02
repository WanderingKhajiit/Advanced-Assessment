function getTotalBooksCount(books) {
   return books.length;
  }

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  
  let booksPurchased = books.filter((book) => book.borrows.filter((record) => record.returned === false).length > 0
 );
  return booksPurchased.length;
}

function getMostCommonGenres(books) {
 let map = {};
  // loop through books 
 books.forEach((num) => {
   // if num.genre (or books.genre) is found,
  if (map[num.genre]) {
   // increment by 1
   map[num.genre]++;
  } else {
    // or else the genre equals 1 
   map[num.genre] = 1;
  }
});
  // return map
   return Object.entries(map)
  // Map the Object entries and return them with name and count
    .map(([name, count]) => {
   // return new object with the values for name and count
     return {
      name: name,
      count: count
     };
   })
  // sort from most to least by their count value
  .sort((most, least) => least.count - most.count)
  // only allow 5 entries at most
  .slice(0, 5);
}


const getMostPopularBooks = books => {
   return books
      .map((book) => {
   return { name: book.title, count: book.borrows.length };
 })
  .sort((most, least) => (most.count < least.count ? 1 : -1))
  .slice(0, 5);
}


function getMostPopularAuthors(books, authors) {
  // create empty array for our result
  let result = [];
  // forEach element in authors
   authors.forEach((author) => {
    // create the object we want as a variable
     let theAuthor = {
       name: `${author.name.first} ${author.name.last}`,
       count: 0
        };
     // forEach element in books if it meets the condition add the length of boorows to the count for our new object
  books.forEach((book) => {
   if (book.authorId === author.id) {
      theAuthor.count += book.borrows.length;
       }
    });
     // push theAuthor into our array, pushes multiple objects since its still inside a loop
      result.push(theAuthor);
  });
  // return result sorted from most to least popular authors and slice it so it only contains five objects
     return result.sort((most, least) => least.count - most.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
