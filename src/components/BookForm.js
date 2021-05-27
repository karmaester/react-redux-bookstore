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
  <div className="container">
    <form>
      <input type="text" value="Title" />
      <select className="form-select" aria-label="Default select example">
        {cat.map((x, i) => (
          <option value={i} key={i}>
            {x}
          </option>
        ))}
      </select>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  </div>
);

export default BookForm;
