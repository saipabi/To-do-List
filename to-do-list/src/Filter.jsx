import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter('all')} className="filter-button">All</button>
      <button onClick={() => setFilter('completed')} className="filter-button">Completed</button>
      <button onClick={() => setFilter('not-completed')} className="filter-button">Not Completed</button>
    </div>
  );
};

export default Filter;
