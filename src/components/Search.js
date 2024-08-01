import React, { useState } from 'react';


const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search recipes..." value={query} onChange={handleChange} required />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
