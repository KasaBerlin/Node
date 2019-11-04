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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
