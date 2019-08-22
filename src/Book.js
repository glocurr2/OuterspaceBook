import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BOOK_PATH = 'https://www.outerspacebook.net/images/';

const Book = ({ book }) => (
  <div className="each-book">
    <Link to={`/details/${book.id}`}>
    <div className="book-container" id={book.id}>
    <div className="thebook"> <img className="book-image" src={`${BOOK_PATH}${book.image}`} alt={book.title} /></div>
    </div>
    <div className="booklist-title">{book.title}</div>
    </Link>
  </div>
);

export default Book;

Book.propTypes = {
   book: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
};
