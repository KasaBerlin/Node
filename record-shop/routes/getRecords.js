var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("this is the getRecords route");
  // res.json(Records);
});

module.exports = router;
