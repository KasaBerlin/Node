// External Dependencies
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// Routers
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

// Initialize
const app = express();

// Logging
app.use(logger("dev"));

// Request Parcers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);

// Path
module.exports = app;
