// import Book from './modules/book.js';
import Books from './modules/books.js';
import getInput from './modules/getInput.js';
import addToList from './modules/addToList.js';

const books = new Books();

const addButton = document.getElementById('btn-add');
addButton.addEventListener('click', () => {
  const book = getInput();
  if ((book.author !== '') && (book.title !== '')) {
    books.addBook(book);
  }
});

window.onload = () => {
  books.data = JSON.parse(localStorage.getItem('BOOKS' || '[]'));
  if (books.data === null) {
    books.data = [];
    return;
  }
  books.data.forEach((book) => addToList(book));
};

document.getElementById('list').addEventListener('click', () => {
  document.getElementById('list').style.color = 'blue';
  document.getElementById('add').style.color = 'black';
  document.getElementById('contact').style.color = 'black';
  document.getElementById('awesome-books').style.display = 'unset';
  document.getElementById('row').style.display = 'none';
  document.getElementById('form-title').style.display = 'none';
  document.getElementById('form').style.display = 'none';
  document.getElementById('section-contact').style.display = 'none';
});

document.getElementById('add').addEventListener('click', () => {
  document.getElementById('list').style.color = 'black';
  document.getElementById('add').style.color = 'blue';
  document.getElementById('contact').style.color = 'black';
  document.getElementById('awesome-books').style.display = 'none';
  document.getElementById('row').style.display = 'none';
  document.getElementById('form-title').style.display = 'flex';
  document.getElementById('form').style.display = 'flex';
  document.getElementById('section-contact').style.display = 'none';
});

document.getElementById('contact').addEventListener('click', () => {
  document.getElementById('list').style.color = 'black';
  document.getElementById('add').style.color = 'black';
  document.getElementById('contact').style.color = 'blue';
  document.getElementById('section-contact').style.display = 'flex';
  document.getElementById('awesome-books').style.display = 'none';
  document.getElementById('row').style.display = 'none';
  document.getElementById('form-title').style.display = 'none';
  document.getElementById('form').style.display = 'none';
});
