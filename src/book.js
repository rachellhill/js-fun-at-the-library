function createTitle(title) {
  return `The ${title}`;
}

//////////////////////

function buildMainCharacter(nme, age, prns) {
  var mainCharacter = {
    name: nme,
    age: age,
    pronouns: prns
  }

  return mainCharacter;
}

/////////////////////

function saveReview(reviewGiven, reviewsArray) {
  if (reviewsArray.includes(reviewGiven)) {
    return
  } else {
    reviewsArray.push(reviewGiven);
  }
};

/////////////////////

function calculatePageCount(title) {
  var pageCount = title.length * 20;
  //console.log(title.length, title.length * 20);
  return pageCount;

}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }
  return book;
};

function editBook(book) {
  book.pageCount = book.pageCount * .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
