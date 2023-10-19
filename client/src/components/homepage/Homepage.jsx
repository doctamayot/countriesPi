import { useSelector, useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import { useEffect, useState } from "react";

import "./Homepage.css";
import { Card } from "../card/Card";
import { Loading } from "../loading/Loading";

export const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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

  const allCountries = useSelector((state) => state.allCountries);

  return (
    <div className="principalHomepage">
      {loading && <Loading />}

      {allCountries.map((country, index) => (
        <div key={index} className="country">
          <Card
            name={country.name}
            img={country.img}
            continent={country.continents}
          />
        </div>
      ))}
    </div>
  );
};
