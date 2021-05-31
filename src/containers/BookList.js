/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBookAction } from '../actions';
import Filter from '../components/Filter';

const BookList = ({ books, removeBook }) => {
  const handleDelete = (id) => {
    console.log(id);
    removeBook(id);
  };

  const handleFilter = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="container">
      <Filter handleFilter={handleFilter} />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Book ID</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book key={book.id} book={book} onClick={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => {
  const removeBook = (id) => dispatch(removeBookAction(id));

  return { removeBook };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
