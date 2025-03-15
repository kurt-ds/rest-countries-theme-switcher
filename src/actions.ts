"use server";

interface NativeName {
  [languageCode: string]: {
    common: string;
    official: string;
  };
} 

interface Currency {
  [currencyCode: string]: {
    name: string;
    symbol: string;
  }
}

interface Language {
  [languageCode: string]: string;
}


interface Country {
  cca3: string;
  name: { common: string, nativeName: NativeName };
  currencies: Currency;
  population: number;
  region: string;
  capital?: string[];
  flags: { png: string };
  languages: Language;
  subregion: string;
  borders: string[];
  tld: string[];
}

interface FilteredCountry {
  cca3: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}


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


export async function fetchCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Country[] = await response.json();

    const filteredData: FilteredCountry[] = data.map((country) => ({
      cca3: country.cca3,
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital ? country.capital[0] : "N/A",
      flag: country.flags.png, // You may also include the flag for display
    }));



    return filteredData;
  } catch (error) {
    // TypeScript should now recognize that an error can occur here
    console.error('Error fetching data:', error);
    // Handle the error appropriately (e.g., return a default value, display an error message)
  }
}

export async function fetchCountry(cca3: string) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Country[] = await response.json();
    const country = data[0];


    const filteredCountry: DetailedCountry | null = await convertCountryToDetailedCountry(country);

    return filteredCountry;
  } catch (error) {
    // TypeScript should now recognize that an error can occur here
    console.error('Error fetching data:', error);
    // Handle the error appropriately (e.g., return a default value, display an error message)
  }
}


async function convertCountryToDetailedCountry(country: Country): Promise<DetailedCountry | null> {
  if (!country) return null;

  const { cca3, name, currencies, population, region, capital, flags, languages, subregion, borders, tld } = country;

  if (!name || !flags || !languages) return null;

  const detailedCountry: DetailedCountry = {
    cca3: cca3,
    name: name.common,
    nativeName: "",
    currencies: currencies ? Object.values(currencies).map(currency => currency.name) : [],
    population: population,
    region: region,
    capital: capital ? capital.join(", ") : "N/A",
    flag: flags.png,
    languages: languages ? Object.values(languages) : [],
    subregion: subregion,
    borders: [],
    tld: tld
  };

  if (name.nativeName) {
    const languageCodes = Object.keys(name.nativeName);
    const lastLanguageCode = languageCodes[languageCodes.length - 1]; // Get the last language code
    detailedCountry.nativeName = lastLanguageCode ? name.nativeName[lastLanguageCode].common : name.common;
  } else {
    detailedCountry.nativeName = name.common;
  }

  if (borders && borders.length > 0) {
    const borderNames = await Promise.all(
      borders.map(async (border) => {
        const countryName = await getCountryName(border);
        return countryName ?? "Unknown Border";
      })
    );
    detailedCountry.borders = borderNames.filter((name): name is string => name !== "Unknown Border");
  }

  return detailedCountry;
}

async function getCountryName(cca3: string): Promise<string | null> {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
    const data: Country[] = await response.json();

    if (data && data.length > 0 && data[0].name.common) {
      return data[0].name.common; // Return the correct country name
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching country data:", error);
    return null;
  }
}