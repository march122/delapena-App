// src/components/SearchFilter.jsx
import React from "react";

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search for a book"
    />
  );
};

export default SearchFilter;
