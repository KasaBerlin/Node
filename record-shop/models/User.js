const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  year: { type: Number, required: true },
  img: { type: String, required: true },
  genre: { type: String, required: false },
  price: { type: Number, required: true }
});

module.exports = mongoose.model("user", userSchema);
