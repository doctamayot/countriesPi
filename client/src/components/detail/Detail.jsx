import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountry } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";

import styles from "./Detail.module.css";
import { Loading } from "../loading/Loading";

export const Detail = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await dispatch(getCountry(id));
      } catch (error) {
        return error.message;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Country Detail</h1>
      {loading && <Loading />}
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>{country.name}</div>
          <img
            src={country.img}
            alt={country.name}
            className={styles.cardImage}
          />
          <div className={styles.cardDetails}>
            <div>ID: {country.id}</div>
            <div>Continent: {country.continents}</div>
            <div>Capital: {country.capital}</div>
            <div>Subregion: {country.subregion}</div>
            <div>Population: {country.poblacion}</div>
            <div>Area: {country.area}</div>
            <div>
              Activities:{" "}
              {country.Activities && country.Activities.length === 0 ? (
                <h3>There are no activities in this country.</h3>
              ) : (
                country.Activities &&
                country.Activities.map((act, index) => (
                  <li key={index}>
                    <ol className={styles.activities}>{act.name}</ol>
                  </li>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Link to="/homepage">
        <div className={styles.backLink}>Back</div>
      </Link>
    </>
  );
};
