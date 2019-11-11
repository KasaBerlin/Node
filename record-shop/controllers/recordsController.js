const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const db = low(adapter);

exports.getRecords = (req, res, next) => {
  const records = db.get("records").value();
  records.length === 0
    ? res.status(200).send("records database is still empty")
    : res.status(200).send(records);
};

// grab individual record by id
exports.getRecord = (req, res, next) => {
  const { id } = req.params;
  const record = db
    .get("records")
    .find({ id })
    .value();
  res.status(200).send(record);
};

// delete an individual record by id
exports.deleteRecords = (req, res, next) => {
  const { id } = req.params;
  const record = db
    .get("records")
    .remove({ id })
    .write();
  res.status(200).send(record);
};

// update a record fromt the id
exports.updateRecord = (req, res, next) => {
  const { id } = req.params;
  const dt = req.body;
  const record = db
    .get("records")
    .find({ id })
    .assign(dt)
    .write();
  res.status(200).send(record);
};

exports.addRecord = (req, res, next) => {
  const record = req.body;
  db.get("records")
    .push(record)
    .last()
    .assign({ id: Date.now().toString() })
    .write();

  res.status(200).send(record);
};
