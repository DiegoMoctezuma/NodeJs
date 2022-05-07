const express = require("express");
const { leerUrl, agregarUrl } = require("../controllers/homeController");
const router = express.Router();

router.get("/", leerUrl);
router.post("/", agregarUrl);

module.exports = router;
