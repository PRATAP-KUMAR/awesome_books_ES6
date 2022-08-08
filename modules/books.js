import addToList from './addToList';

class Books {
  constructor() {
    this.data = [];
  }

  addBook(book) {
    this.data.push(book);
    localStorage.setItem('BOOKS', JSON.stringify(this.data));
    addToList(book);
  }

  removeBook(id) {
    const book = document.getElementById(id);
    book.remove();
    this.data = this.data.filter((bookObj) => bookObj.id !== id);
    localStorage.setItem('BOOKS', JSON.stringify(this.data));
  }
}

export default Books;
