import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Country {
  cca3: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

export default function CountryList({
  countries,
}: {
  countries: Country[] | undefined;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 m-4">
      {countries?.map((country) => (
        <Link key={country.cca3} href={`/${country.cca3}`} passHref>
          <div
            key={country.cca3}
            className="rounded-lg shadow-2xl mx-8  my-3 flex flex-col cursor-pointer bg-secondary"
          >
            <div className="">
              <Image
                src={country.flag}
                alt={`Flag of ${country.name}`}
                width={80}
                height={50}
                objectFit="contain"
                className="w-full h-full rounded-t-lg aspect-3/2"
              />
            </div>
            <div className="px-7 py-6 mb-5 text-body">
              <p className="font-semibold mt-2 text-detail mb-5">{country.name}</p>
              <p className="mt-2">
                <span className="font-medium text-home">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>
              <p className="mt-2">
                <span className="font-medium text-home">Region:</span> {country.region}
              </p>
              <p className="mt-2">
                <span className="font-medium text-home">Capital:</span> {country.capital}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
