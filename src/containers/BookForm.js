/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBookAction } from '../actions';

const uniqid = require('uniqid');

const cat = [
  'Select category',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BookForm = ({ createBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('please add a title');
      return;
    }

    if (!category) {
      alert('please add a category');
      return;
    }
    const book = { id: uniqid.process(), title, category };
    createBook(book);

    setTitle('');
    setCategory('');
  };

  return (
    <div className="container d-flex justify-content-center">
      <form onSubmit={onSubmit}>
        <div className="form-group align-self-center">
          <input
            type="text"
            className="form-control p-2 m-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type the books title"
          />
        </div>
        <div className="form-group align-self-center">
          <select
            className="form-select p-2 m-3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Default select example"
          >
            {cat.map((x, i) => (
              <option value={x} key={i}>
                {x}
              </option>
            ))}
          </select>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  const createBook = (book) => dispatch(createBookAction(book));

  return { createBook };
};

export default connect(null, mapDispatchToProps)(BookForm);
