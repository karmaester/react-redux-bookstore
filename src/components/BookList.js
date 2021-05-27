/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books }) => {
  console.log(books);
  return (
    <div className="container">
      <h1 className="text-center">Center</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Book ID</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});
export default connect(mapStateToProps)(BookList);
