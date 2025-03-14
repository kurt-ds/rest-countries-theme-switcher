"use client";
import React, { useState, useEffect } from "react";
import fetchCountries from "../actions";
import NavBar from '../components/NavBar';
import CountryList from "@/components/CountryList";

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountries();

      setCountries(data);
      setLoading(false);

      console.log(data);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once on mount

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
    <>
      <NavBar />
      <CountryList countries={countries} />
    </>
  );
}
