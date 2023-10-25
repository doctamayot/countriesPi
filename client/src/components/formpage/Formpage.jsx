import { useState } from "react";
import { createActivity } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { validation } from "../../helpers/validation";
import { Link } from "react-router-dom";

import styles from "./Formpage.module.css";

export const Formpage = () => {
  const [activityData, setActivityData] = useState({
    name: "",
    season: "",
    dificulty: "",
    duration: "",
    country: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    season: "",
    duration: "",
    dificulty: "",
    country: "",
    general: "",
  });
  const [messageOK, setMessageOK] = useState(false);

  const dispatch = useDispatch();
  const activity_error = useSelector((state) => state.activity_error);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const resp = validation(name, value);
    setErrors({
      ...errors,
      [name]: resp,
    });

    if (name === "duration") {
      const durationNumber = Number(value);
      setActivityData({ ...activityData, [name]: durationNumber });
    } else if (name === "dificulty") {
      const dificultyNumber = Number(value);
      setActivityData({ ...activityData, [name]: dificultyNumber });
    } else if (name === "country") {
      if (!value.includes(",")) {
        const countriesArray = [value];
        setActivityData({ ...activityData, [name]: countriesArray });
      }
      // Divide el valor del campo de texto por comas y eliminar espacios alrededor
      const countriesArray = value.split(",").map((country) => country.trim());
      setActivityData({ ...activityData, [name]: countriesArray });
    } else {
      setActivityData({ ...activityData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const resp = validation(name, value);
    setErrors({
      ...errors,
      [name]: resp,
    });

    if (
      !activityData.name ||
      !activityData.season === "" ||
      !activityData.duration === "" ||
      !activityData.dificulty === "" ||
      !activityData.country === ""
    ) {
      setErrors({
        general: "You must fill in all the fields.",
      });
      return;
    }
    dispatch(createActivity(activityData));

    setActivityData({
      name: "",
      season: "",
      dificulty: "",
      duration: "",
      country: "",
    });
    setMessageOK(true);
    setTimeout(() => {
      setMessageOK(false);
    }, 2000);
    setErrors({
      general: "",
    });
  };
  return (
    <div>
      <h1 className={styles.title}>Create Activity</h1>
      {activity_error ? (
        <div className={styles.error}>{activity_error}</div>
      ) : (
        messageOK && <h2 className={styles.messageOK}>Activity created!!!</h2>
      )}

      {errors && errors.general && (
        <h4
          style={{
            color: "red",
            textAlign: "center",
            marginTop: "50px",
            fontSize: "30px",
          }}
        >
          {errors.general}
        </h4>
      )}

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={activityData.name}
          onChange={handleChange}
          name="name"
        />
        {errors && errors.name && (
          <h4 style={{ color: "red" }}>{errors.name}</h4>
        )}
        <label>Season: </label>
        <input
          type="text"
          value={activityData.season}
          onChange={handleChange}
          name="season"
        />
        {errors && errors.season && (
          <h4 style={{ color: "red" }}>{errors.season}</h4>
        )}
        <label>Duration: </label>
        <input
          type="number"
          min="1"
          value={activityData.duration}
          onChange={handleChange}
          name="duration"
        />
        {errors && errors.duration && (
          <h4 style={{ color: "red" }}>{errors.duration}</h4>
        )}
        <label>Dificulty: </label>
        <input
          type="number"
          min="1"
          value={activityData.dificulty}
          onChange={handleChange}
          name="dificulty"
        />
        {errors && errors.dificulty && (
          <h4 style={{ color: "red" }}>{errors.dificulty}</h4>
        )}
        <label>Country: </label>
        <input
          type="text"
          value={activityData.country}
          onChange={handleChange}
          name="country"
          placeholder="Separate the countries with a ','"
        />
        {errors && errors.country && (
          <h4 style={{ color: "red" }}>{errors.country}</h4>
        )}
        {!errors.name &&
          !errors.season &&
          !errors.duration &&
          !errors.dificulty &&
          !errors.country && <button type="submit">Enviar</button>}
      </form>
      <Link to="/homepage">
        <div className={styles.backLink}>Back</div>
      </Link>
    </div>
  );
};
