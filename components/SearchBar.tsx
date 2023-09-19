"use client";

import { useState } from "react";

import { SearchManufacturer } from ".";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const onHandleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={onHandleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
          manufacturer = {manufacturer}
          setManufacturer = {setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
