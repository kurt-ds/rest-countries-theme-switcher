"use client";
import React from "react";

interface FilterControlsProps {
  regionFilter: string;
  setRegionFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  regionFilter,
  setRegionFilter,
}) => {
  return (
    <div className="my-5 relative shadow-4xl rounded-lg bg-secondary h-12 min-w-50 flex">
      {" "}
      {/* Make parent relative */}
      <select
        value={regionFilter}
        onChange={(e) => setRegionFilter(e.target.value)}
        className="pl-4 text-body text-home bg-secondary rounded appearance-none w-full" // appearance-none hides default arrow
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antarctic</option>
      </select>
      <div className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-4 stroke-body fill-body h-[16px] w-[16px] justify-center items-center">
        {/* Replace with your custom SVG icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z" />
        </svg>
      </div>
    </div>
  );
};

export default FilterControls;
