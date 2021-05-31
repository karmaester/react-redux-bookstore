import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleFilter }) => {
  const [cat, setCat] = useState('');
  const theClick = (e) => {
    e.preventDefault();

    handleFilter({ cat });
  };
  return (
    <div>
      <select onChange={(e) => setCat(e.target.value)} onClick={theClick}>
        <option value="">All</option>
        <option value="Action">Action</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Kids">Kids</option>
        <option value="Learning">Learning</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
