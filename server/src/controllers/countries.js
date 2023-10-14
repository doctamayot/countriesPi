const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const getCountries = async (req, res) => {
  //With query
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
      if (country.length === 0) {
        return res
          .status(200)
          .json({ message: "The country you are looking for does not exist" });
      }
      return res.status(200).json(country);
    } else {
      //Without query
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
    const country = await Country.findAll({
      where: {
        id: idPais,
      },
      include: Activity,
    });
    return res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCountries, getCountry };
