const axios = require("axios");
const { Country } = require("../db");

const loadApi = async () => {
  try {
    const { data } = await axios("http://localhost:5000/countries");

    for (let country of data) {
      await Country.create({
        id: country.cca3,
        name: country.name.common,
        img: country.flags.png,
        continents: country.continents,
        capital: country.capital,
        subregion: country.subregion,
        area: country.area,
        poblacion: country.population,
      });
    }
    return "Base de datos grabada";
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = loadApi;
