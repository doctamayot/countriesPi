import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getCountriesBy } from "../../redux/actions";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(getCountriesBy(e.target.value));
    setValue(e.target.value);
  };
  return (
    <div className={styles.principalNav}>
      <h2 className={styles.logo}>Countries App</h2>
      <Link to="/activity">
        <h2 className={styles.button}>Create Activity</h2>
      </Link>
      <input
        className={styles.inputNav}
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Find by name"
      />
    </div>
  );
};
