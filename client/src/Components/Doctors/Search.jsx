/* eslint-disable react/prop-types */
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim()); // Trigger search callback
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); // Trigger search on Enter key
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // Adjust debounce duration as needed

    return () => clearTimeout(timeout);
  }, [query]);

  // Automatically trigger search when debouncedQuery changes
  useEffect(() => {
    if (debouncedQuery.trim()) {
      onSearch(debouncedQuery.trim());
    }
  }, [debouncedQuery, onSearch]);

  return (
    <div className="max-w-[500px] bg-[#0066ff2c] rounded-full flex items-center justify-between">
      <input
        type="search"
        aria-label="Search Doctor"
        className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer"
        placeholder="Search Doctor"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <MagnifyingGlassIcon
        className="w-6 h-6 text-gray-500 mr-4 cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};

export default Search;
