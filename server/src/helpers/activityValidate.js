const { Activity } = require("../db");

const activityValidate = async (activity) => {
  const { name, season, dificulty, duration, countries } = activity;

  //Tipos de datos
  if (typeof name !== "string") return "Name must be a string";
  if (typeof season !== "string") return "Season must be a string";
  if (typeof dificulty !== "number") return "Dificulty must be a number";
  if (typeof duration !== "number") return "Dificulty must be a number";
  if (!Array.isArray(countries)) return "Countries must be an array";

  if (!name || !season || !dificulty) return "'Required fields are missing";
  const activityFound = await Activity.findOne({
    where: {
      name: name,
    },
  });
  if (activityFound) return "Activity exist!";
  if (dificulty < 1 || dificulty > 5)
    return "Dificulty must be between 1 and 5";
  if (dificulty % 1 !== 0) return "Dificulty must be a integer";
  if (duration && duration % 1 !== 0) return "Duration must be a integer";
  return;
};

module.exports = activityValidate;
