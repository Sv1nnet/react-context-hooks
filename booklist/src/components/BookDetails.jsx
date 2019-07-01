/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  const { id } = book;
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
