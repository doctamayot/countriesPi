const { Activity, Country } = require("../db");
const activityValidate = require("../helpers/activityValidate");

const createActivity = async (req, res) => {
  const { data } = req.body;
  try {
    const message = await activityValidate(data);
    if (message) {
      return res.status(400).json({ message: message });
    }
    const activity = await Activity.create(data);
    await activity.addCountries(data.country);
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

const deleteActivity = async (req, res) => {
  const { name } = req.body;
  try {
    const activity = await Activity.findOne({ where: { name } });

    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    await activity.destroy();

    return res.status(200).json({ message: "Activity Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createActivity, getActivities, deleteActivity };
