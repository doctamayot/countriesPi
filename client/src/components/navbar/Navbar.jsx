import React, { useState } from "react";

import "./Navbar.css";
import { useDispatch } from "react-redux";
import { getCountriesBy } from "../../redux/actions";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(getCountriesBy(e.target.value));
    setValue(e.target.value);
  };
  return (
    <div className="principalNav">
      <h2 className="logo">Countries App</h2>
      <Link to="/activity">
        <h2 className="button">Create Activity</h2>
      </Link>
      <input
        className="inputNav"
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Find by name"
      />
    </div>
  );
};
