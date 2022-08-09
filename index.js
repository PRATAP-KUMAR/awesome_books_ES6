import Books from './modules/books.js';
import getInput from './modules/getInput.js';
import { DateTime } from './modules/luxon.js';

const books = new Books();

const awesomeBooks = document.createElement('div');
awesomeBooks.innerHTML = '';

const addToList = (bookObj) => {
  const container = document.createElement('div');
  container.className = 'container';
  container.setAttribute('id', bookObj.id);
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  container.appendChild(wrapper);

  const bookName = document.createElement('div');
  bookName.innerText = bookObj.title;
  wrapper.appendChild(bookName);

  const byText = document.createElement('div');
  byText.innerText = 'By';
  wrapper.appendChild(byText);

  const authName = document.createElement('div');
  authName.innerText = bookObj.author;
  wrapper.appendChild(authName);

  const buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'Remove';
  container.appendChild(buttonDelete);

  buttonDelete.addEventListener('click', () => {
    books.removeBook(bookObj.id);
  });

  awesomeBooks.appendChild(container);
  const section = document.body.querySelector('#awesome-books');
  section.appendChild(awesomeBooks);
};

const addButton = document.getElementById('btn-add');
addButton.addEventListener('click', () => {
  const book = getInput();
  if ((book.author !== '') && (book.title !== '')) {
    books.addBook(book);
    addToList(book);
  }
});

const updateTime = () => {
  const now = DateTime.now();
  const printDate = document.body.querySelector('header > p');
  printDate.innerText = now;
};

window.onload = () => {
  books.data = JSON.parse(localStorage.getItem('BOOKS' || '[]'));
  if (books.data === null) {
    books.data = [];
    return;
  }
  books.data.forEach((book) => addToList(book));
  updateTime();
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
  updateTime();
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
  updateTime();
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
  updateTime();
});
