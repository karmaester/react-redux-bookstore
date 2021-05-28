/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { BsFillTrashFill } from 'react-icons/bs';

const Book = ({ book, onClick }) => {
  const { id, title, category } = book;
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>
          <button type="button" key="id" className="btn" onClick={() => onClick(id)}>
            <BsFillTrashFill className="text-danger" />
          </button>
        </td>
      </tr>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
