const { Op } = require("sequelize");
const { Activity, Country } = require("../db");

const createActivity = async (req, res) => {
  try {
    const activity = await Activity.create(req.body);
    await activity.addCountries(req.body.countries);
    return res.status(200).json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      include: Country,
    });
    return res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createActivity, getActivities };
