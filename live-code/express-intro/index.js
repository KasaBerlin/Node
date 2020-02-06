const express = require("express");
const path = require("path");
// const members = require("./Members");
const logger = require("./middleware/logger");

// initialise express
const app = express();

// Body parser middleware
app.use(express.json()); // lets us use json
app.use(express.urlencoded({ extended: false })); // handles form submission

// initialise middleware
app.use(logger);

// app.get("/", (req, res) => {
// 	res.send("<h1>Good Morning</h1>");
// });

// app.get("/", (req, res) => {
// 	res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// set static folder
// app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
