const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json"); // read and writes to database

const db = low(adapter);

// set defaults for the database
db.defaults({
  records: []
}).write();

// lets add a record
// const album = {
//   artist: "The Fall",
//   title: "Bend Sinister",
//   year: 1981
// };

// push and write to DB
// db.get("records")
//   .push(album)
//   .write();

/////////////////////////////////////////////////////

// console.log(db.getState());

//*************************************************//

db.defaults({
  users: []
}).write();

const users = db.get("users");

// add a user if we don't have any

if (users.value().length === 0) {
  const userNames = ["Sylvia", "Kohei", "Rufus"];
  userNames.forEach(name => {
    users
      .push({
        name: name,
        lastVisit: new Date(),
        visits: 5
      })
      .write();
  });
}

const test = db
  .get("users")
  .find({ name: "Kohei" })
  .value();

console.log(test);
