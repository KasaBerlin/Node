const express = require("express");
const router = express.Router();
const auth= require("../middleware/authenticator")

const {
  getRecords,
  getRecord,
  updateRecord,
  deleteRecord,
  addRecord
} = require("../controllers/recordsController");

router
  .route("/")
  .get(auth,getRecords)
  .post(auth,addRecord);

router
  .route("/:id")
  .get(auth,getRecord)
  .delete(auth,deleteRecord)
  .put(auth,updateRecord);

module.exports = router;
