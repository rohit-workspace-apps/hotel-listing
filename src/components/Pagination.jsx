// src/components/Pagination.js
import React from 'react';

const Pagination = ({ hotelsPerPage, totalHotels, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHotels / hotelsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
