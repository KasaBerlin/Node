// External Dependencies
let faker = require("faker");
const mongoose = require("mongoose");

// Configs
const {env,db}=require("../config/environment"); 

// Models
const Product = require("../models/product");

async function seed(){
    // if(env != "developer") return 


// DB Connection
mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

mongoose.connection.on("error", console.error);
mongoose.connection.on("open", () => {
    console.log("Database connection established...");
  });

// Generate Radom Products

try {
    await Product.deleteMany({});
    console.log("Products purged!");
  } catch (e) {
    console.error(e);
    return;
  }

// create an array of promises for each product being created 
// the array will have anything between 4-50 entries
const productPromises=Array(faker.random.number({min:5,max:50}))
// fill the array with nulls so we can 
.fill(null)
.map(()=>{
    // randomise a product name 
    const randomName=faker.commerce.productName();
    // create a mongoose Product
    const Product=new Product({
        // generate url from robohash, a quick image 
        imgUrl:`https://robohash.org/${randomName}".png`,
        title:randomName,
        // create a description with a random length of words between 5 and 30
        description:faker.lorem.words(faker.random.number({min:5,max:30})),
        // generate a fake price 
        price: faker.commerce.price()
    });
    // map each null in the array into a random saved product
    return productPromises.save()
})

try{
    // resolve all product promises to save to db
    await Promise.all(productPromises);
    // disconnect DB 
    mongoose.disconnect();
    console.log("Product collections seeded")
} catch (e){
    // log errors 
    console.log(e)
}
}
seed();