import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        id='searchBox'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
      <label htmlFor="searchBox" className='sr-only'>search robots</label>
    </div>
  );
}

export default SearchBox;