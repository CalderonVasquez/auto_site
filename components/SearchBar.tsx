"use client";

import {useState} from 'react'
import {SearchManufacturer} from '@/components'

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="search__bar-item">
              <SearchManufacturer
                  manufacturer={manufacturer}
                  setManufacturer={setManufacturer}
              />
      </div>
    </form>
  );
};

export default SearchBar;
