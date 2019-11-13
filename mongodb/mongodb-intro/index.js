const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/books", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// this is a pending connection - we want a notification concerning our connection status

const db = mongoose.connection;
db.on("error", console.error);
db.on("open", () => {
  console.log("Database connection is established...");
});

// define a schema
// it all starts with a schema - each schema maps to a MongoDB
// collection and defines the shape of its document

const citySchema = new mongoose.Schema({
  name: String,
  country: String,
  population: Number,
  spreaksGerman: Boolean
});

// Compiling into model
// a model is a class with which we construct documents

const City = mongoose.model("City", citySchema);

// clear documents
// City.collection.drop();

// creating a document

// const Berlin = new City({
//   name: "Berlin",
//   country: "Germany",
//   population: 3500000
// });

// const Tokio = new City({
//   name: "Tokio",
//   country: "Japan",
//   population: 92000000,
//   speaksGerman: false
// });

//now lets save to Mongo

// Tokio.save(err => {
//   if (err) return console.error(err);
// });

// insert many

// const cities = [
//   {
//     name: "Vancouver",
//     country: "Canada"
//   },
//   {
//     name: "Tijuana",
//     country: "Mexico"
//   },
//   { name: "Alexandria", country: "Egypt" },
//   { name: "Wien", country: "Austria", speaksGerman: true }
// ];

// City.insertMany(cities, (err, docs) => {
//   if (err) {
//     return console.log(err);
//   } else {
//     console.log("Multiple documents inserted to collection");
//   }
// });

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  ISBN: String
});

const Book = mongoose.model("Book", bookSchema);

const bleakHouse = new Book({
  title: "Bleak House",
  author: "Charles Dickens",
  ISBN: "ALY85823085823"
});

bleakHouse.save(err => {
  if (err) return console.error(err);
});
