import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={query}
      onChange={handleSearch}
      className="w-full p-2 border rounded-md shadow-sm dark:bg-gray-800 dark:text-white"
    />
  );
};

export default SearchBar;