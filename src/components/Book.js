/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

const Book = ({ book, onClick }) => {
  const { id, title, category } = book;
  return (
    <>
      <div className="row mt-4">
        <div className="col-5 bg-white rounded-book-left pt-4 pl-4">
          <div className="catg bg-white text-left text-secondary">
            {category}
          </div>
          <h4 className="book-title bg-white text-left font-weight-bold mb-0">
            {title}
          </h4>
          <div className="book-title bg-white text-left lt-blue">
            Suzane Collins
          </div>
          <ul className="d-flex bg-white align-items-center list-unstyled mt-3 lt-blue">
            <li className="bg-white">Comments</li>
            <li className="bg-white rm-border mx-2">
              <button
                type="button"
                key="id"
                className="btn lt-blue"
                onClick={() => onClick(id)}
              >
                Remove
              </button>
            </li>
            <li className="bg-white">Edit</li>
          </ul>
        </div>
        <div className="col-3 bg-white row d-flex justify-content-around">
          <div className="circle bg-white col text-center align-items-center">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              className="circle-progress bg-white w-75 h-75"
            />
          </div>
          <div className="perc bg-white col text-left d-flex flex-column justify-content-center p-0">
            <div className="num bg-white">64%</div>
            <div className="cond bg-white">Completed</div>
          </div>
        </div>
        <div className="col-4 bg-white rounded-book-right">
          <div className="m-4 bg-white border-left chapter">
            <p className="bg-white mb-1 text-secondary">CURRENT CHAPTER</p>
            <p className="bg-white">Chapter One</p>
            <button type="button" className="btn btn-primary py-1">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
