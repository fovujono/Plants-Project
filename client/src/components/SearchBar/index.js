import React from "react";
import "./style.css";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          onKeyUp={handleSearch}
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
