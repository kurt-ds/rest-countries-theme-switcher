"use client";
import React from "react";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchProps> = ({
  searchQuery,
  setSearchQuery
}) => {
  return (
<div className="bg-secondary text-body shadow-4xl my-8 rounded-lg relative h-12 w-full max-w-xl flex">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 rounded w-full text-body pl-14 placeholder-body-muted"
        />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-body" // Icon positioning and styling
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      </div>
  );
};

export default SearchBar;