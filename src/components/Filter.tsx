interface FilterProps {
  onSelectRegion: (region: string) => void;
}

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Filter: React.FC<FilterProps> = ({ onSelectRegion }) => {
  return (
    <select
      onChange={(e) => onSelectRegion(e.target.value)}
      className="p-2 border rounded-md shadow-sm dark:bg-gray-800 dark:text-white"
    >
      <option value="">Filter by Region</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default Filter;
