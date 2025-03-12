"use client";
import React, { useState, useEffect } from "react";
import fetchCountries from "../actions";
import NavBar from '../components/NavBar';

interface FilteredCountry {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

export default function Home() {
  const [countries, setCountries] = useState<FilteredCountry[] | undefined>([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchCountries();

  //     setCountries(data);
  //     setLoading(false);

  //     console.log(data);
  //   };

  //   fetchData();
  // }, []); // Empty dependency array means this effect runs only once on mount

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );

  return (
    <>
      <NavBar />
    </>
  );
}
