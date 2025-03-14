"use server";

interface Country {
  name: { common: string };
  population: number;
  region: string;
  capital?: string[];
  flags: { png: string };
}

interface FilteredCountry {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

export default async function fetchCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Country[] = await response.json();

    const filteredData: FilteredCountry[] = data.map((country) => ({
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital ? country.capital[0] : "N/A",
      flag: country.flags.png, // You may also include the flag for display
    }));


    const limitedData = filteredData.slice(0, 50);

    
    return limitedData;
  } catch (error) {
    // TypeScript should now recognize that an error can occur here
    console.error('Error fetching data:', error);
    // Handle the error appropriately (e.g., return a default value, display an error message)
  }
}

