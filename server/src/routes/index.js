const { Router } = require("express");
const {
  getCountries,
  getCountry,
  getCountryByName,
} = require("../controllers/countries");
const {
  createActivity,
  getActivities,
  deleteActivity,
} = require("../controllers/activities");

const router = Router();

router.get("/countries", getCountries);
router.get("/countries/:idPais", getCountry);
router.post("/activities", createActivity);
router.get("/activities", getActivities);
router.delete("/activities", deleteActivity);

module.exports = router;
