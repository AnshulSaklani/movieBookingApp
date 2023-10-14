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
let { movies, movieHalls, users } = require("./movies.js");

app.get("/moviesAll/:movie", function(req, res) {
	let movie = req.params.movie;
	let arr1 = movies.filter(m => m.name.search(movie) >= 0);
	console.log(arr1);
	res.send(arr1);
});

app.get("/movieHall", function(req, res) {
	let arr1 = movieHalls;
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
		arr1 = arr1.filter((a) => a.languages.some(lang => langArr.includes(lang)));
	}
	if(formatArr.length > 0) {
		arr1 = arr1.filter((a) => a.format.some(form => formatArr.includes(form)));
	}
	if(genreArr.length > 0) {
		arr1 = arr1.filter((a) => a.genre.some(gen => genreArr.includes(gen)));
	}
	res.send(arr1);
});

app.post("/login", function(req,res){
	let {mail, password} = req.body;
	let user = users[users.findIndex((u) => u.mail ===  mail && u.password === password)];
	if (user) {
		res.send(user);
	}
	else {
		res.status(401).send("Login failed");
	}
});

app.post("/booking", function(req,res){
	let {mail, name, bookingData} = req.body;
	let index = users.findIndex(u => u.mail === mail && u.name === name);
	if(index >= 0) {
		users[index].booking.push(bookingData);
		res.send(users[index]);
	}
});

app.post("/bookedMovies", function(req, res) {
	let {mail, password} = req.body;
	let index = users.findIndex((u) => u.mail ===  mail && u.password === password);
	if(index >= 0) {
		res.send(users[index].booking);
	}
});

app.put("/userData/:id", function(req, res) {
	let id = req.params.id;
	let body = req.body;
	let index = users.findIndex((user) => user.id === +id);
	if (index>=0) {
		let updatedUser = {...body};
		users[index] = updatedUser;
		res.send(updatedUser);
	}
	else {
		res.status(404).send("No user found");
	}
});
