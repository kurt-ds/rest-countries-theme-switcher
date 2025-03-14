"use client";
import React, { useState, useEffect } from "react";
import fetchCountries from "../actions";
import NavBar from '../components/NavBar';
import CountryList from "@/components/CountryList";
import FilterControls from "@/components/FilterControls";

interface Country {
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

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountries();

      setCountries(data);
      setLoading(false);

      console.log(data);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once on mount


  const filteredCountries = countries?.filter((country) => {
    if (!regionFilter) return true;
    return country.region === regionFilter;
  });


  if (loading)
    return (
  <>
      <NavBar />
      <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-body"></div>
      </div>
  </>
    );

  return (
    <div className="" >
      <NavBar />
      <FilterControls
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
      />
      <CountryList countries={filteredCountries} />
    </div>
  );
}
