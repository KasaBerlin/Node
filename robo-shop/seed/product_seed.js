let faker = require("faker");
const env=require("./config/environment")
const mongoose = require("mongoose");
const Product = require("../models/product");

(async () => {
  //Connect to DB
  mongoose.connect()
  env.db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on("error", console.error);
  mongoose.connection.on("open", () => {
    console.log("Database connection established...");
  });

  console.log("This is the purge");

  try {
    await Product.deleteMany({});
    console.log("Robots purged");
  } catch (err) {
    console.error(err);
  }

  const productPromises = Array(5)
    .fill(null)
    .map(() => {
      const product = new Product({
        img: `<img src="https://robohash.org/${faker.name.firstName()}".png/>`
      });

      return product.save();
    });

  try {
    await Promise.all(productPromises);
    console.log("The robots are seeded");
  } catch (e) {
    console.error(e);
  }
  mongoose.connection.close();
})();

