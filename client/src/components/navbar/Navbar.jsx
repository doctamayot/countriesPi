import React, { useState } from "react";

import "./Navbar.css";
import { useDispatch } from "react-redux";
import { getAllCountries, getCountriesBy } from "../../redux/actions";

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
