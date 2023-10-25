import styles from "./Filters.module.css";

export const Filters = ({
  handleChangeActivity,
  handleChangeContinents,
  handleChangeSortName,
  handleChangeSortPop,
  activities,
}) => {
  return (
    <div className={styles.filters}>
      <div className={styles.filter}>
        <label>Continent:</label>
        <select onChange={handleChangeContinents}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Asia">Asia</option>
        </select>
      </div>
      <div className={styles.filter}>
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

      <div className={styles.filter}>
        <label>Sort by Name:</label>
        <select onChange={handleChangeSortName}>
          <option value="none">none</option>
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
      </div>
      <div className={styles.filter}>
        <label>Sort By population:</label>
        <select onChange={handleChangeSortPop}>
          <option value="none">none</option>
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
      </div>
    </div>
  );
};
