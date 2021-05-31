/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onClick }) => {
  const { id, title, category } = book;
  return (
    <>
      <div className="row mt-4">
        <div className="col bg-white rounded-book-left">
          <div className="catg bg-white">{category}</div>
          <div className="book-title bg-white">{title}</div>
          <ul className="d-flex bg-white align-items-center list-unstyled">
            <li className="bg-white">Comments</li>
            <li className="bg-white">
              <button type="button" key="id" className="btn" onClick={() => onClick(id)}>
                Remove
              </button>
            </li>
            <li className="bg-white">Edit</li>
          </ul>
        </div>
        <div className="col bg-white">Graphic</div>
        <div className="col bg-white rounded-book-right">Chapter</div>
      </div>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
