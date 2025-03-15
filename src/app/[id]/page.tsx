"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchCountry } from "@/actions";
import CountryDetail from "@/components/CountryDetail";
import Link from "next/link";

interface DetailedCountry {
  cca3: string;
  name: string;
  nativeName: string;
  currencies: string[];
  population: number;
  region: string;
  capital: string;
  flag: string;
  languages: string[];
  subregion: string;
  borders: string[];
  tld: string[];
}

export default function Page() {
  const params = useParams();
  const id = params.id; // Get the dynamic ID from the URL
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState<DetailedCountry | null | undefined>(null);


  useEffect(() => {
    const fetchData = async () => {
      if (typeof id === "string") {
        const data: DetailedCountry | null | undefined = await fetchCountry(id);


        setLoading(false);
        setCountry(data);
      }
    }

    fetchData();

    console.log(country)
  }, [id]);


  if (loading) {
    return (
      <>
          <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-body"></div>
          </div>
      </>
        );
  }

  if (country === null || country === undefined) {
    return (
      <>
          <div className="flex justify-center items-center h-screen">
          <div className="border-b-2 border-body">Error Fetching Country...</div>
          </div>
      </>
        );
  }

  return (
    <div className="my-10 mx-8">
      <Link key="/back" href={"/"} passHref className="bg-secondary shadow-4xl px-6 py-1.5 mt-10 mb-20 flex w-min items-center gap-2 hover:bg-tertiary text-detail text-body" ><svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2" // Adjust size and margin
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>Back</Link>

      
      <CountryDetail country={country} />
    </div>
  );
}
