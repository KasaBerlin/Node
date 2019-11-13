import { mongoose } from "mongoose";

const record = db.get("records").value();

const recordSchema = new mongoose.Schema({
  artist: { type: String, required: true },
  year: { type: Number, required: false },
  title: { type: String, required: true },
  genre: { type: String, required: false },
  id: Number
});

const Record = mongoose.model("Record", recordSchema);

Record.insertMany(record),
  (err, docs) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Records added!");
    }
  };
