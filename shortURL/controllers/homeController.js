const leerUrl = async (req, res) => {
	const urls = [
		{ origin: "www.google.com/elpepe", shortURL: "afewsdwefa1" },
		{ origin: "www.google.com/skrillex", shortURL: "afewsdwefa2" },
		{ origin: "www.google.com/topogigo", shortURL: "afewsdwefa3" },
	];
	res.render("home", { urls: urls });
};

const agregarUrl = async (req, res) => {};

module.exports = {
	leerUrl,
	agregarUrl,
};
