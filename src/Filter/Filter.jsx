import React from 'react';
import T from 'prop-types';

const Filter = ({ searchId, handleFilter, filter }) => (
  <>
    <p>Find contact by name</p>
    <label htmlFor={searchId}>
      <input
        type="text"
        onChange={handleFilter}
        name="filter"
        value={filter}
        id={searchId}
      />
    </label>
  </>
);

Filter.propTypes = {
  searchId: T.string.isRequired,
  handleFilter: T.func.isRequired,
  filter: T.string.isRequired,
};

export default Filter;
