import React from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBookAction, filterBook } from '../actions';
import Filter from '../components/CategoryFilter';

const BookList = ({ books, filtered, removeBook }) => {
  const handleDelete = (id) => {
    removeBook(id);
  };

  const dispatch = useDispatch();
  const handleFilterChange = (category) => {
    dispatch(filterBook({ category: category.cat }));
  };

  const filteredBooks = () => {
    if (filtered === 'All' || filtered.category === '') {
      return books;
    }
    return books.filter((book) => filtered.category === book.category);
  };

  return (
    <div className="container mt-4">
      <Filter handleFilter={handleFilterChange} />
      {filteredBooks().map((book) => (
        <Book key={book.id} book={book} onClick={handleDelete} />
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  filtered: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filtered: state.filter,
});

const mapDispatchToProps = (dispatch) => {
  const removeBook = (id) => dispatch(removeBookAction(id));

  return { removeBook };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
