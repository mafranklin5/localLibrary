function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksOut = books.filter(
    (book) =>
  book.borrows.filter((record) => record.returned === false).length > 0);
  return booksOut.length;
}

//Helper function
function topFive (list) {
  while (list.length > 5) {
    list.pop();
  }
  return list;
}

function getMostCommonGenres(books) {
  let map = {};
 books.forEach((num) => {
  if (map[num.genre]) {
   map[num.genre]++;
  } else {
   map[num.genre] = 1;
  }
 });
 return topFive(Object.entries(map)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
  .sort((bookA, bookB) => bookB.count - bookA.count));
}

function getMostPopularBooks(books) {
  return topFive(books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1)));
}

function getMostPopularAuthors(books, authors) {
  let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return topFive(result.sort((authorA, authorB) => authorB.count - authorA.count));
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
