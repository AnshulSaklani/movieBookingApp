let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

//const port = 2410;
var port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
let { movies } = require("./movies.js");

app.get("/moviesAll/:movie", function(req, res) {
	let movie = req.params.movie;
	let arr1 = movies.filter(m => m.name.search(movie) >= 0);
	console.log(arr1);
	res.send(arr1);
});

app.get("/moviesAll", function(req, res) {
	let lang = req.query.lang;
	let format = req.query.format;
	let genre = req.query.genre;
	let arr1 = movies;
	let langArr = [];
	let formatArr = [];
	let genreArr = [];
	if(lang) langArr = lang.split(",");
	if(format) formatArr = format.split(",");
	if(genre) genreArr = genre.split(",");
	if(langArr.length > 0) {
		arr1 = arr1.filter((a) => langArr.find((val) => val === a.languages.map(lang => lang)));
	}
	if(formatArr.length > 0) {
		arr1 = arr1.filter((a) => formatArr.find((val) => val === a.format.map(form => form)));
	}
	if(genreArr.length > 0) {
		arr1 = arr1.filter((a) => genreArr.find((val) => val === a.genre.map(gen => gen)));
	}
	res.send(arr1);
});
