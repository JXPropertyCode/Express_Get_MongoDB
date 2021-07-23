// Load express module
const express = require("express");
const posts = require('./routes/posts');

// Initialize app
const app = express();

// Mongoose connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/nodemongo", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;

// Check for DB connection
db.once("open", function () {
	console.log("Connected to MongoDB successfully!");
});
db.on("error", function () {
	console.log(err);
});

// Route for home
app.get("/", function (req, res) {
	res.send("hello express");
});

app.use('/posts', posts);

// Start server with port 3000
app.listen(3000, function () {
	console.log("Server started on localhost:3000");
});