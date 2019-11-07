/** EXTERNAL DEPENDENCIES */
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

/** ROUTERS */
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const recordsRouter = require("./routes/records");
const { setCors } = require("./middleware/security");

/** INIT */
const app = express();

/** LOGGING */
app.use(logger("dev"));

/** SETTING UP LOWDB */
const adapter = new FileSync("data/db.json");
const db = low(adapter);
db.defaults({ records: [] }).write();

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
app.use("/api", indexRecords);

// ERROR HANDLING
app.use((req, res, next) => {
  const error = new Error("Error 404 - This site does not exist");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  error: {
    message: err.message;
  }
});

/** EXPORT PATH */
module.exports = app;
