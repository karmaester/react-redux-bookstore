import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

const Header = () => (
  <div className="header d-flex justify-content-between p-4 bg-white w-100">
    <div className="left row align-items-center bg-white">
      <div className="title col bg-white text-primary">Bookstore</div>
      <div className="books col bg-white">BOOKS</div>
      <div className="cat col bg-white">CATEGORIES</div>
    </div>
    <AiOutlineUser className="right text-primary" />
  </div>
);

export default Header;
