import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books, addBook } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map(book => <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>)}
      </ul>
      <button onClick={addBook}>Add book</button>
    </div>
  );
};

export default BookList;
