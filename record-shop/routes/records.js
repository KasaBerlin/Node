const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const db = low(adapter);

const {
  getRecords,
  getRecord,
  deleteRecords,
  updateRecord,
  addRecord
} = require("../controllers/recordsController");

router
  .route("/")
  .all((req, res, next) => {
    next();
  })
  .get(getRecords)
  .post(addRecord);

router
  .route("/:id")
  .get(getRecord)
  .delete(deleteRecords)
  .put(updateRecord);

module.exports = router;

// single routes
// router.get("/", getRecords);
// router.post("/", addRecord);

// my solution
// (req, res) => {
//   const newRecord = {
//     id: uuid.v4(),
//     artist: req.body.artist,
//     title: req.body.title,
//     year: req.body.year
//   };
//   if (!newRecord.title || !newRecord.artist || !newRecord.year) {
//     return res.status(400).json({ message: "please include record data" });
//   } else
//     db.get("records")
//       .push(newRecord)
//       .write();
//   res.json(records); // sends
// });

// router.delete("/records/:artist", function(req, res, next) {
//   if (req.params.artist === records.artist) {
//     res.json(records.artist);
//     db.get("records")
//       .remove(records.artist)
//       .write();
//   } else {
//     res.send("found nothing");
//   }
// });
