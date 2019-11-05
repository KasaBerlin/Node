const express = require("express");
const path = require("path");
const router = require("./routes/api/members");
const logger = require("./middleware/logger");
// initilaize express
const app = express();

// Body parser middelware
app.use(express.json()); // lets us use json
app.use(express.urlencoded({ extended: false })); //handles submission

// initialize middleware
// app.use(logger);
// app.get("/", (req, res) => {
//   res.send("Hallo");
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// using middleware // set static folder
// app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api/members", require("./routes/api/members"));

// Explanation: This function is a safety railguard to make sure the port provided is number,
// if not a number then a string and if anything else set it to false.

// You really don't need normalizePort function if you are providing the port yourself to
// the environment variable and ensuring that the port is going to be a number always via some
// sorf of config, which is the answer to your question:

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
