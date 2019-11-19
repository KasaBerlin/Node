/** EXTERNAL DEPENDENCIES */
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const createError = require("http-errors");
const mongoose = require("mongoose");

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
mongoose.connect("mongodb://127.0.0.1:27017/record-Shop", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on("error", console.log);
mongoose.connection.on("open", () => {
  console.log("Database connection is established...");
});

/** SETTING UP LOWDB */
const adapter = new FileSync("data/db.json");
const db = low(adapter);
db.defaults({
  records: []
}).write();

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
