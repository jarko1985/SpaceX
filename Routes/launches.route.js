const router = require("express").Router();
const { getAllLaunches } = require("../controllers/launches.controller");

router.get("/", getAllLaunches);

module.exports = router;
