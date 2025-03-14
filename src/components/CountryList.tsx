import Image from "next/image";

interface Country {
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
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
      {countries?.map((country) => (
        <div
          key={country.name}
          className="rounded-lg shadow-2xl mx-8 flex flex-col my-5 cursor"
        >
          <div className="" >
            <Image
              src={country.flag}
              alt={`Flag of ${country.name}`}
              width={80}
              height={50}
              objectFit="contain"
              className="w-full h-full rounded-md aspect-3/2"
            />
          </div>
          <div className="px-7 py-6 mb-5 text-body">
            <p className="font-semibold mt-2 text-lg mb-5">{country.name}</p>
            <p className="mt-2"><span className="font-medium">Population:</span> {country.population.toLocaleString()}</p>
            <p className="mt-2"><span className="font-medium">Region:</span> {country.region}</p>
            <p className="mt-2"><span className="font-medium">Capital:</span> {country.capital}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
