import React, { useEffect, useState } from 'react';

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    props.onSearchChange(searchText);
  }, [searchText]);

  return (
    <>
      <div className="">
        <input type="text" placeholder='search...' value={searchText} onChange={handleChange} />
      </div>
      {/* <div className='hidden'>
        <Countries text={searchText} />
      </div> */}
    </>
  );
};

export default SearchBar;

// https://restcountries.com/v3.1/name/{name}