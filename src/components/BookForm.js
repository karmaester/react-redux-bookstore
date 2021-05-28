/* eslint-disable react/no-array-index-key */
import React from 'react';

const cat = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BookForm = () => (
  <div className="container d-flex justify-content-center">
    <form>
      <div className="form-group align-self-center">
        <input type="text" className="form-control p-2 m-3" placeholder="Type the books title" />
      </div>
      <div className="form-group align-self-center">
        <select className="form-select p-2 m-3" aria-label="Default select example">
          {cat.map((x, i) => (
            <option value={i} key={i}>
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

export default BookForm;
