import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCountries,
  currentAction,
  filterByContinent,
  getActivities,
  filterByActivity,
  orderByName,
  orderByPop,
} from "../../redux/actions";

import { Card } from "../card/Card";
import { Loading } from "../loading/Loading";
import { Pagination } from "../pagination/Pagination";
import { Filters } from "../filters/Filters";
import styles from "./Homepage.module.css";

export const Homepage = () => {
  const countriesPerPage = 10;

  const [loading, setLoading] = useState(false);

  ///Redux
  const dispatch = useDispatch();
  const pagCountries = useSelector((state) => state.filteredCountries);
  const allCountries = useSelector((state) => state.allCountries);
  const currentPage = useSelector((state) => state.currentPage);
  const activities = useSelector((state) => state.activities);

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

  //Pagination
  useEffect(() => {
    if (pagCountries.length > 0) {
      const index = currentPage * countriesPerPage;
      setCountries([...pagCountries].slice(index, index + countriesPerPage));
      return;
    }
    setCountries([]);
  }, [pagCountries]);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

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
    setCountries([...pagCountries].slice(index, index + 10));
    dispatch(currentAction(page));
  };

  const handleChangeContinents = (e) => {
    dispatch(filterByContinent(e.target.value));
  };
  const handleChangeActivity = (e) => {
    dispatch(filterByActivity(e.target.value));
  };

  const handleChangeSortName = (e) => {
    dispatch(orderByName(e.target.value));
  };

  const handleChangeSortPop = (e) => {
    dispatch(orderByPop(e.target.value));
  };

  return (
    <>
      <Filters
        handleChangeActivity={handleChangeActivity}
        handleChangeContinents={handleChangeContinents}
        handleChangeSortName={handleChangeSortName}
        handleChangeSortPop={handleChangeSortPop}
        activities={activities}
      />
      {loading && <Loading />}
      <div className={styles.principalHomepage}>
        {countries.length ? (
          countries.map((country, index) => (
            <div key={index} className={styles.country}>
              <Card
                name={country.name}
                img={country.img}
                continent={country.continents}
                id={country.id}
              />
            </div>
          ))
        ) : (
          <div className={styles.errorExist}>
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
