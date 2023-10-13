const { Op } = require("sequelize");
const { Country } = require("../db");

const getCountries = async (req, res) => {
  try {
    if (req.query.name) {
      const { name } = req.query;

      const item = name.toLowerCase();
      const country = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${item}%`,
          },
        },
      });
      return res.status(200).json(country);
    } else {
      const countries = await Country.findAll();
      return res.status(200).json(countries);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getCountry = async (req, res) => {
  const { idPais } = req.params;
  try {
    const country = await Country.findByPk(idPais.toUpperCase());
    return res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCountries, getCountry };
