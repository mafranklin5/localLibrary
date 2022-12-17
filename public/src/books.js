function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
  );
  let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
  );
  let allBooks = [[...booksBorrowed], [...booksReturned]];
  return allBooks;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
