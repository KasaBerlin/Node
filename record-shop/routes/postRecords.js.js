const express = require("express");
const uuid = require("uuid");
const router = express.Router();

/* GET users listing. */
router.post("/", (req, res) => {
  const newRecord = {
    id: uuid.v4(),
    artist: req.body.artist,
    title: req.body.title,
    year: req.body.year
  };
  if (!newRecord.title || !newRecord.artist || !newRecord.year) {
    return res.status(400).json({ message: "please include record data" });
  }
  records.push[newRecord]; // adds to array
  res.json(records); // sends
});

module.exports = router;
