/** EXTERNAL DEPENDENCIES */
<<<<<<< HEAD
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError=require("http-errors");
const {userValidationRules,validate}=require("./validators/validator")
=======
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
>>>>>>> 2b4ba97f309aaf312f02677985699c4c10ec1233

/** ROUTERS */
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const recordsRouter = require("./routes/records");
const ordersRouter = require("./routes/orders");
const { setCors } = require("./middleware/security");

/** INIT */
const app = express();

/** LOGGING */
<<<<<<< HEAD
app.use(logger('dev'));

/** SETTING UP MONGOOSE IN SERVER */
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/recordShop", {
=======
app.use(logger("dev"));

/**CONNECT TO DB */
mongoose.connect("mongodb://localhost:27017/record-shop", {
>>>>>>> 2b4ba97f309aaf312f02677985699c4c10ec1233
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

<<<<<<< HEAD
mongoose.connection.on("error", console.log);
mongoose.connection.on("open", () => {
  console.log("Database connection is established...");
=======
mongoose.connection.on("error", console.error);
mongoose.connection.on("open", function() {
  console.log("Database connection established...");
>>>>>>> 2b4ba97f309aaf312f02677985699c4c10ec1233
});

/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(setCors);

/** STATIC FILES*/
app.use(express.static(path.join(__dirname, "public")));

/** ROUTES */
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/records", recordsRouter);
app.use("/orders", ordersRouter);

/** ERROR HANDLING */
app.use(function(req, res, next) {
  const error = new Error("Looks like something broke...");
  error.status = 400;
  next(error);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).send({
    error: {
      message: err.message
    }
  });
});

/** EXPORT PATH */
module.exports = app;