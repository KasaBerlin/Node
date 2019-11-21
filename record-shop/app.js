/** EXTERNAL DEPENDENCIES */
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createError = require("http-errors");
const mongoose = require("mongoose");
const { body } = require("express-validator");

/** ROUTERS */
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const recordsRouter = require("./routes/records");
const ordersRouter = require("./routes/orders");
const { setCors } = require("./middleware/setCors");

/** INIT */
const app = express();

/** LOGGING */
app.use(logger("dev"));

/** CONNECT TO DB */
mongoose.connect("mongodb://127.0.0.1:27017/record-shop", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on("error", console.log);
mongoose.connection.on("open", () => {
  console.log("Database connection is established...");
});

/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(setCors);

/** STATIC FILES*/
app.use(express.static(path.join(__dirname, "public")));

const validationParameters = () => {
  // not production code!!! look at the docs
  return [
    body("email")
      .isEmail()
      .normalizeEmail()
      .trim()
      .withMessage("Your email is looking not valid"),
    body("password")
      .isLength({ min: 10 })
      .withMessage("The minimum length is 10 charakters"),
    body("firstName")
      .exists()
      .trim()
      .escape()
      .withMessage("Give us your first name")
  ];
};

/** ROUTES */
app.use("/", indexRouter);
app.use("/users", validationParameters(), usersRouter);
app.use("/records", recordsRouter);
app.use("/orders", ordersRouter);

/** ERROR HANDLING */
// app.use(function(req, res, next) {
//   const error = new Error("Looks like something is broke...");
//   error.status = 400;
//   // next();
// });

app.use((req, res, next) => {
  return next(createError(400, "Looks like you are lost"));
  next();
});

app.use(function(err, req, res, next) {
  res.send({
    error: {
      message: err.message
    }
  });
});

/** EXPORT PATH */
module.exports = app;
