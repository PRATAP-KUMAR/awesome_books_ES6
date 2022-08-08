// import Books from './books.js';

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
    // books.removeBook(bookObj.id);
  });

  awesomeBooks.appendChild(container);
  const section = document.body.querySelector('#awesome-books');
  section.appendChild(awesomeBooks);
};

export default addToList;
