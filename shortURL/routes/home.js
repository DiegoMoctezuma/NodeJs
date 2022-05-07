const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	const urls = [
		{ origin: "www.google.com/elpepe", shortURL: "afewsdwefa1" },
		{ origin: "www.google.com/skrillex", shortURL: "afewsdwefa2" },
		{ origin: "www.google.com/topogigo", shortURL: "afewsdwefa3" },
	];
	res.render("home", { urls: urls });
});

module.exports = router;
