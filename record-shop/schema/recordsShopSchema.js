const mongoose=require("mongoose")

const recordShopSchema = new mongoose.Schema({
  artist: { type: String, required: true },
  year: { type: Number, required: false },
  title: { type: String, required: true },
  genre: { type: String, required: false },
  id: Number
});

module.exports = mongoose.model("recordShop",recordShopSchema );


