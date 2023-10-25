import "./Filters.css";

export const Filters = ({
  handleChangeActivity,
  handleChangeContinents,
  handleChangeSortName,
  handleChangeSortPop,
  activities,
}) => {
  return (
    <div className="filters">
      <div className="filter">
        <label>Continent:</label>
        <select value={selectedContinent} onChange={handleChangeContinents}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Asia">Asia</option>
        </select>
      </div>
      <div className="filter">
        <label>Activities:</label>
        <select onChange={handleChangeActivity} defaultValue="none">
          <option value="none">none</option>
          {activities.map((activity, index) => (
            <option key={index} value={activity.name}>
              {activity.name}
            </option>
          ))}
        </select>
      </div>

      <div className="filter">
        <label>Sort by Name:</label>
        <select value={selectedPopulation} onChange={handleChangeSortName}>
          <option value="none">none</option>
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
      </div>
      <div className="filter">
        <label>Sort By population:</label>
        <select value={selectedPopulation} onChange={handleChangeSortPop}>
          <option value="none">none</option>
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
      </div>
    </div>
  );
};
