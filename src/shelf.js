// declared a new function named shelfBook and passed two parameters, book and shelf, which is an array
function shelfBook(book, shelf) {
  // if the length of the shelf array is less than 3 books, the book can be added to the shelf array
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

// declared a new function named unshelfBook and passed in two parameters
// which are bookTitle and shelf
function unshelfBook(bookTitle, shelf) {
// loop through every book in the shelf array to see if bookTitle is strictly
// equal to a title on the shelf, then we will remove the book at index 1
  for (var i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  // created an empty array named titles, which the loop below will iterate through the
  // shelf array and push the titles to the empty array
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  // return titles as a string using .join array method with commas and spaces.
  return titles.join(', ');
}

// declare a new function named searchShelf and give two parameters named shelf and bookTitle
function searchShelf(shelf, bookTitle) {
  //loop through the shelf array to see if a book on a shelf equals the book title we are searching for
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      // if true, return true
      return true;
    }
  } // do not need an else statement, just a return if the condition above evaluates to false
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
