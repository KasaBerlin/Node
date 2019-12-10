// External Dependencies

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware=require("node-sass-middleware")
const mongoose=require("mongoose");

// Configs

const env=require("./config/environment")
const userRouter=require("./routes/users")

// Routers 

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


// Init

const app = express();

// View Engine
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Logging 
app.use(logger('dev'));

//connect to db
mongoose.connect(
env.db,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true
})

mongoose.connection.on("error",console.error);
mongoose.connection.on("open", function() {
  console.log("Database connection established...");
});

// Request Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static Asset Handling
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Error Handling
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Export Configured App
module.exports = app;
