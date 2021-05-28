/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBookAction, filterBook } from '../actions';
import Filter from '../components/Filter';

const BookList = ({ books, removeBook }) => {
  const handleDelete = (id) => {
    removeBook(id);
  };

  const dispatch = useDispatch();
  const fetchData = (category) => {
    console.log(category);
    dispatch(
      filterBook({
        category: category.cat,
      }),
    );
  };

  // const handleFilter = (e) => {
  // console.log(e.target.value);
  // };

  return (
    <div className="container">
      <Filter handleFilter={fetchData} />
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
