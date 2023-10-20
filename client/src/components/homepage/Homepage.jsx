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

  ///Redux
  const dispatch = useDispatch();
  const pagCountries = useSelector((state) => state.filteredCountries);
  const allCountries = useSelector((state) => state.allCountries);
  const currentPage = useSelector((state) => state.currentPage);

  console.log(pagCountries);

  const [countries, setCountries] = useState(pagCountries);
  console.log(countries);

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

  const totalPages = Math.ceil(NumberOfCountries / countriesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      {loading && <Loading />}
      <div className="principalHomepage">
        {countries.length ? (
          countries.map((country, index) => (
            <div key={index} className="country">
              <Card
                name={country.name}
                img={country.img}
                continent={country.continents}
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
