import React, { useState } from "react";

function Search({ toggleSearch }) {

  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (e) => {
    toggleSearch(searchInput)
    setSearchInput(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearch} value={searchInput} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
