import React from 'react';
import { FaSearch } from "react-icons/fa";

function SearchBar({ onChange }) {
  return (
    <div className='box'>
      <input type="text" placeholder='Search ..' onChange={onChange} />
      <a href="#">
        <FaSearch className='fas fa-search' />
      </a>
    </div>
  );
}

export default SearchBar;
