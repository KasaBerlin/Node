// External Dependencies

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const session=require ("express-session")
const logger = require('morgan');
const sassMiddleware=require("node-sass-middleware")
const mongoose=require("mongoose");
const MongoStore=require("connect-mongo")(session);
const hbs=require("express-handlebars");
const flash=require("connect-flash");
const passport=require("./lib/auth")

// Configs

const env=require("./config/environment")


// Middleware 

const {initCart,setLocals}=require("./middleware/init-session")

// Routers 

const indexRouter = require('./routes/index');
const cartRouter=require("./routes/cart")
const usersRouter = require('./routes/users');

// Init

const app = express();

// Flash 
app.use(flash());

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

// View Engine

// sets our view engine to handlebars
app.set('view engine', 'hbs');

// configure handlebars
app.engine("hbs",hbs({
  extname:"hbs", // extension name for handlebars files
  defaultLayout:"layout", // template name for default layout 
  // set up directories
  layoutsDir:path.join(__dirname, "views","layouts"),
  partialsDir:path.join(__dirname,"views","partials")
}))

// Logging 
app.use(logger('dev'));

// Request Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// SESSIONS
app.use(
  session({
    // The secret allows for signed cookies and helps prevent fake requests from being made
    secret: env.secrets.session,
    // Disables defaults that are about to be deprecated
    resave: false,
    saveUninitialized: false,
    // Set general options for the sessionID cookie
    cookie: {
      // Cookie expiration date
      maxAge: 1000 * 60 * 60 * 24 // 24 hrs
    },
    // The store saves all session data in a defined 
    // In our case we will save our session in our already configured MongoDB 
    store: new MongoStore({
      mongooseConnection:mongoose.connection
    })
  })
);

// flash
app.use(flash());

// auth
app.use(passport.initalize());
app.use(passport.session());

// Static Asset Handling
app.use(express.static(path.join(__dirname, 'public')));


//custom middleware
app.use([initCart,setLocals])

// Routes
app.use('/', indexRouter);
app.use('/cart',cartRouter);
app.use('/user', usersRouter);

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
