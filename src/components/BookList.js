import React from 'react';

const BookList = () => (
  <div>
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
        <tr>
          <td>ID-1</td>
          <td>Title One</td>
          <td>Category One</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default BookList;
