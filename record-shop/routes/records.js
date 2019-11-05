var express = require("express");
var router = express.Router();
const uuid=require("uuid");
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({records:[]})
  .write()
const records=db.get("records")

/* GET users listing. */
router.get("/records", function(req, res, next) {
records.value().length===0? res.send("records database is still empty"):
res.json(records);
});

router.post("/records", (req, res) => {
  const newRecord = {
    id: uuid.v4(),
    artist: req.body.artist,
    title: req.body.title,
    year: req.body.year
  };
  if (!newRecord.title || !newRecord.artist || !newRecord.year) {
    return res.status(400).json({ message: "please include record data" });
  } else db.get("records").push(newRecord).write()
  res.json(records); // sends
});

module.exports = router;
