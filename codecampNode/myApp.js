var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

// --> 7)  Mount the Logger middleware here

app.use(function middleware(req, res, next) {
  console.log(`${req.method} ${req.path}$ - ${req.ip}`);
  next();
});

// --> 11)  Mount the body-parser middleware  here

// To handle HTTP POST request in Express.js version 4 and above, 
// you need to install middleware module called body-parser.
// body-parser extract the entire body portion of an incoming
// request stream and exposes it on req.body. The middleware was a part of Express.js earlier
// but now you have to install it separately.

app.use(bodyParser.urlencoded({extended: false}));

/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express Server */
/*app.get("/", (req, res)=> {
  res.send('Hello Express');
})
/** 3) Serve an HTML file */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
/** 4) Serve static assets  */

app.use(express.static(path.join(__dirname, "public")));

/** 5) serve JSON on a specific route */

app.get("/json", (req, res) => {
  process.env.MESSAGE_STYLE === "uppercase"
    ? res.json({ message: "HELLO JSON" })
    : res.json({ message: "Hello json" });
});

/** 6) Use the .env file to configure the app */

process.env.MESSAGE_STYLE = "uppercase";

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

/** 8) Chaining middleware. A Time server */

app.get(
  "/now",
  function(req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function(req, res) {
    res.json({ time: req.time });
  }
);

/** 9)  Get input from client - Route parameters */

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

app.route("/name").get((req, res) => {
  let { first: firstName, last: lastName } = req.query;
  res.json({ name: `${firstName} ${lastName}` });
});

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */

app.post("/name",function(req,res){
  var string = req.body.first + " " + req.body.last;
  res.json({name:string});
})

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;
