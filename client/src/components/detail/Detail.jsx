import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountry } from "../../redux/actions";
import { useParams } from "react-router-dom";

import "./Detail.css";
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
      {loading && <Loading />}
      <div className="card">
        <div className="card-content">
          <div className="card-title">{country.name}</div>
          <img src={country.img} alt={country.name} className="card-image" />
          <div className="card-details">
            <div>ID: {country.id}</div>
            <div>Continent: {country.continents}</div>
            <div>Capital: {country.capital}</div>
            <div>Subregion: {country.subregion}</div>
            <div>Population: {country.poblacion}</div>
            <div>Area: {country.area}</div>
          </div>
        </div>
      </div>
    </>
  );
};
