import { useSelector, useDispatch } from "react-redux";
import { getAllCountries, currentAction } from "../../redux/actions";
import { useEffect, useState } from "react";

import "./Homepage.css";
import { Card } from "../card/Card";
import { Loading } from "../loading/Loading";
import { Pagination } from "../pagination/Pagination";

export const Homepage = () => {
  const countriesPerPage = 10;

  const [loading, setLoading] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState();
  const [selectedPopulation, setSelectedPopulation] = useState();

  ///Redux
  const dispatch = useDispatch();
  const pagCountries = useSelector((state) => state.filteredCountries);
  const allCountries = useSelector((state) => state.allCountries);
  const currentPage = useSelector((state) => state.currentPage);

  const [countries, setCountries] = useState(pagCountries);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await dispatch(getAllCountries());
      } catch (error) {
        return error.message;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (pagCountries.length > 0) {
      const index = currentPage * countriesPerPage;
      setCountries([...pagCountries].slice(index, index + countriesPerPage));
      return;
    }
    setCountries([]);
  }, [pagCountries]);

  //Pagination
  const NumberOfCountries = pagCountries.length;
  const totalPages = Math.ceil(NumberOfCountries / countriesPerPage);
  const pageNumbers = [];
  for (let i = 0; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const nextHandle = () => {
    const nextPage = currentPage + 1;
    const index = nextPage * countriesPerPage;
    if (index >= NumberOfCountries) return;
    setCountries([...pagCountries].slice(index, index + 10));
    dispatch(currentAction(nextPage));
  };
  const prevHandle = () => {
    const prevPage = currentPage - 1;
    const index = prevPage * countriesPerPage;
    if (currentPage <= 0) return;
    setCountries([...pagCountries].slice(index, index + 10));
    dispatch(currentAction(prevPage));
  };

  const paginationHandle = (e) => {
    const page = e.target.value - 1;
    const index = page * countriesPerPage;
    setCountries([...allCountries].slice(index, index + 10));
    dispatch(currentAction(page));
  };

  const filterContinent = (e) => {
    const page = currentPage;
    const index = page * countriesPerPage;
    const selectedValue = e.target.value;
    setSelectedContinent(selectedValue);
    if (selectedValue === "All") {
      setCountries(pagCountries.slice(index, index + 10));
    } else {
      setCountries(
        [...pagCountries]
          .filter((country) => country.continents[0] === selectedValue)
          .slice(index, index + 10)
      );
    }
  };

  return (
    <>
      <div className="filters">
        <div className="filter">
          <label>Continent:</label>
          <select value={selectedContinent} onChange={filterContinent}>
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
          <label>Max Population:</label>
          <select
            value={selectedPopulation}
            onChange={(e) => setSelectedPopulation(e.target.value)}
          >
            <option value="">Any</option>
            <option value="1000000">Less than 1 million</option>
          </select>
        </div>
        <div className="filter">
          <label>Sort:</label>
          <select
          // value={selectedPopulation}
          // onChange={(e) => setSelectedPopulation(e.target.value)}
          >
            <option value="">Any</option>
            <option value="1000000">Less than 1 million</option>
          </select>
        </div>
      </div>
      {loading && <Loading />}
      <div className="principalHomepage">
        {countries.length ? (
          countries.map((country, index) => (
            <div key={index} className="country">
              <Card
                name={country.name}
                img={country.img}
                continent={country.continents}
                id={country.id}
              />
            </div>
          ))
        ) : (
          <div className="ErrorExist">
            <h3>This country doesn't exist</h3>
          </div>
        )}
      </div>
      {countries.length && (
        <Pagination
          nextHandle={nextHandle}
          prevHandle={prevHandle}
          paginationHandle={paginationHandle}
          pageNumbers={pageNumbers}
          currentPage={currentPage}
        />
      )}
    </>
  );
};
