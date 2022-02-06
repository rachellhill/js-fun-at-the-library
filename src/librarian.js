class Librarian {
  constructor(personName, library, patron) {
    this.name = personName;
    this.library = library;
    this.patron = patron
  }
  greetPatron(patron) {
    return `Hello, ${this.name}!`;
  }
}

module.exports = Librarian;
