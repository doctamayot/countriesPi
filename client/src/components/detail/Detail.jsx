import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCountry } from "../../redux/actions";

import { Link, useParams } from "react-router-dom";

import styles from "./Detail.module.css";

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
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>{country.name}</div>
          <img
            src={country.img}
            alt={country.name}
            className={styles.cardImage}
          />
          <div className={styles.cardDetails}>
            <div style={{ marginTop: "5px" }}>
              <div className={styles.titles}>ID:</div> {country.id}
            </div>
            <div style={{ marginTop: "5px" }}>
              <div className={styles.titles}>Continent:</div>{" "}
              {country.continents}
            </div>
            <div style={{ marginTop: "5px" }}>
              <div className={styles.titles}>Capital:</div> {country.capital}
            </div>
            <div style={{ marginTop: "5px" }}>
              <div className={styles.titles}>Subregion:</div>{" "}
              {country.subregion}
            </div>
            <div style={{ marginTop: "5px" }}>
              <div className={styles.titles}>Population:</div>{" "}
              {country.poblacion} habs
            </div>
            <div style={{ marginTop: "5px" }}>
              <div className={styles.titles}>Area:</div> {country.area}
            </div>
            <div style={{ marginTop: "5px" }}>
              <div style={{ fontWeight: "bolder" }}>Activities:</div>
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
