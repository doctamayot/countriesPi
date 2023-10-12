const { Router } = require("express");
const getCountries = require("../controllers/getCountries");

const router = Router();

router.get("/", getCountries);

module.exports = router;
