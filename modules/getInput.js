import Book from './book.js';

const getInput = () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const book = new Book(title.value, author.value);
  title.value = '';
  author.value = '';
  return book;
};

export default getInput;
