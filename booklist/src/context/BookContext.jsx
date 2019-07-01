import React, { createContext, useReducer, useEffect } from 'react';
import bookReducer from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const booksStringified = localStorage.getItem('books');
  const storageBooks = booksStringified !== null ? JSON.parse(localStorage.getItem('books')) : [];
  const [books, dispatch] = useReducer(bookReducer, [...storageBooks]);
  const { children } = props;

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
