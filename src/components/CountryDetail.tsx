import React from "react";
import Image from "next/image";

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

interface CountryDetailProps {
  country: DetailedCountry;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country }) => {
  return (
<div className="mx-auto text-body flex flex-col sm:w-full md:flex-row sm:gap-20 sm:mx-0">
  <div className="md:w-1/2"> {/* Added width control */}
    <Image
      src={country.flag}
      alt={`Flag of ${country.name}`}
      width={200}
      height={120}
      objectFit="contain"
      className="w-full aspect-3/2 mb-8"
    />
  </div>
  <div className="flex flex-col gap-8 md:w-1/2"> {/* Added width control */}
    <div>
      <h2 className="text-2xl font-bold text-body">{country.name}</h2>
    </div>
    <div className="flex flex-col gap-8 md:flex-row xl:gap-30" >
    <div className="flex flex-col gap-4">
      <p className="">
        <span className="font-medium">Native Name:</span> {country.nativeName}
      </p>
      <p>
        <span className="font-medium">Population:</span> {country.population.toLocaleString()}
      </p>
      <p>
        <span className="font-medium">Region:</span> {country.region}
      </p>
      <p>
        <span className="font-medium">Subregion:</span> {country.subregion}
      </p>
      <p>
        <span className="font-medium">Capital:</span> {country.capital}
      </p>
    </div>
    <div className="flex flex-col gap-4">
      <p>
        <span className="font-medium">Top Level Domain:</span> {country.tld.join(", ")}
      </p>
      <p>
        <span className="font-medium">Currencies:</span> {country.currencies.join(", ")}
      </p>
      <p>
        <span className="font-medium">Languages:</span> {country.languages.join(", ")}
      </p>
    </div>
    </div>
    <div className="flex flex-col gap-2 xl:flex-row xl:items-center">
      <p className="whitespace-nowrap">
        <span className="font-medium">Border Countries:</span>
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2 justify-center flex-1">
        {country.borders.map((border) => (
          <div key={border} className="bg-secondary py-2 px-3 text-center">
            {border}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
};

export default CountryDetail;
