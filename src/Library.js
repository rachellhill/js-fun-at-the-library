// create a function named createLibrary and give it one parameter named name
function createLibrary(name) {
  // create an empty object
  var denverLibrary = {}
  // declare a name property and assign it name
  denverLibrary.name = name;
  // declare another property named shelves and assign properties fantasy, fiction and nonFiction
  // assign the shelves properties to empty arrays.
  denverLibrary.shelves = {};
  denverLibrary.shelves.fantasy = [];
  denverLibrary.shelves.fiction = [];
  denverLibrary.shelves.nonFiction = [];
  return denverLibrary;
}

// declare a function addBook and pass two parameters named denverLibrary and book
function addBook(denverLibrary, book) {
  // if genre is equal to fantasy, add the book to the fantasy shelf
  if (book.genre === 'fantasy') {
    denverLibrary.shelves.fantasy.push(book);
    // if the genre is equal to nonFiction, add the book to the nonFiction shelf
  } else if (book.genre === 'nonFiction') {
    denverLibrary.shelves.nonFiction.push(book);
  } else {
    // if the genre is not equal to the above two, then it must be fiction, so it will be added to the fiction shelf
    denverLibrary.shelves.fiction.push(book);
  }
}

function checkoutBook(denverLibrary, book, genre) {
  // bc shelves is an object, you can use bracket notation to access the key directly
  // for loop will iterate through the entire shelf before returning the last statement because of the way
  // addBook is set up in the last else statement where it takes in current number of the array 
  // if book is equal to the title in the shelf object - genre arrays at index 0, splice the book from the array at
  // index 0, 1 item and return string.
  for (var i = 0; i < denverLibrary.shelves[genre].length; i++) {
    if (book === denverLibrary.shelves[genre][i].title) {
      denverLibrary.shelves[genre].splice(i, 1);
      return `You have now checked out ${book} from the ${denverLibrary.name}`;
      }
    }
    return `Sorry, there are currently no copies of ${book} available at the ${denverLibrary.name}`;
};


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
