"use client";
import React, { useState, useEffect } from "react";
import {fetchCountries} from "../actions";
import CountryList from "@/components/CountryList";
import FilterControls from "@/components/FilterControls";
import SearchBar from "@/components/SearchBar";

interface Country {
  cca3: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

export default function Home() {
  const [countries, setCountries] = useState<Country[] | undefined>([]);
  const [loading, setLoading] = useState(true);
  const [regionFilter, setRegionFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountries();

      setCountries(data);
      setLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once on mount


  const filteredCountries = countries?.filter((country) => {
    if (!regionFilter && !searchQuery) return true;
    const regionMatch = !regionFilter || country.region === regionFilter;
    const searchMatch = !searchQuery || country.name.toLowerCase().includes(searchQuery.toLowerCase());

    return regionMatch && searchMatch;
  });


  if (loading)
    return (
  <>
      <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-body"></div>
      </div>
  </>
    );

  return (
    <div className="text-home" >
      <div className="flex flex-col sm:gap-5 items-start sm:justify-between sm:items-center mx-5 sm:flex-row xl:mx-20" >
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <FilterControls
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
      />
      </div>
      <CountryList countries={filteredCountries} />
    </div>
  );
}
