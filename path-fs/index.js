// // PATH

// // The path module is used to work with different paths on our file system
// console.log(`Directory name:`, __dirname);
// // absolute path of the directory containing the currently executing file

// console.log(`File name:`, __filename);
// // includes currently executed filename in the path

// const path = require("path");

// const basename = path.basename("Users/Katrin/DCI/materials/js/node/index.js"); // returns the last portion of a path
// const dirname = path.dirname("Users/Katrin/DCI/materials/js/node/index.js"); // path without file
// const extname = path.extname("Users/Katrin/DCI/materials/js/node/index.js"); // extension name of the file
// const aPath = path.join("Katrin", "DCI", "materials", "app.js"); // creates new path

// console.log(`Basename:`, basename);
// console.log(`Dirname:`, dirname);
// console.log(`Extname:`, extname);
// console.log(`New Path`, aPath);

// // parsing a path into an object---console.log should return an object

// const parsedObj = path.parse(
//   "/home/dci-l125/Desktop/all/dom/node/path-fs/index.js"
// );
// console.log(parsedObj);

// FS - File System
const fs = require("fs");
// console.log(fs);

// Two ways to read files -
// synchronously - blocking
// asynchronoulsly - non-blocking

// const startingTime = new Date().getTime();

// console.log("I am about to read a file asychronously");
// fs.readFile("./data.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("I am reading the file from sync");
//   console.log("I run async", new Date().getTime() - startingTime);
//   console.log(data);
//   console.log("I am done async");
//   console.log("----------------------------------------------------------");
// });

// console.log("I am about to read a file asychronously part2");
// fs.readFile("./data.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("I am reading the file from sync");
//   console.log("I run async", new Date().getTime() - startingTime);
//   console.log(data);
//   console.log("I am done async part2");
//   console.log("----------------------------------------------------------");
// });

// console.log("I am about to read a file synchronously");
// const data = fs.readFileSync("./data.txt", "utf8");
// console.log("I run sync", new Date().getTime() - startingTime);
// console.log(data);
// console.log("I am done synched!");
// console.log("----------------------------------------------------");

// sync is blocking instead of async so it holds other processes and it finishes faster
// readFile is recommended

// const data =
//   "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.";

// fs.writeFile("./data.txt", data, err => {
//   if (err) throw err;
//   console.log("Updated brains file!!");
// });

// creates textfile with data or overwrites content of textfile
// with appendFile add instead of overwrite with every execution

// read a JSON Object

// fs.readFile("./data.json", "utf8", (err, data) => {
//   if (err) throw err;
//   const dataObj = JSON.parse(data);
//   console.log(dataObj);
//   dataObj.bands.forEach(e => {
//     console.log(e);
//   });
// });

// JSON.stringify, writeFile

let newMovies = ["personal shopper", "die Wolken von Sils Maria"];

fs.readFile("./data.json", "utf8", (err, data) => {
  if (err) throw err;
  const dataObj = JSON.parse(data);
  //   console.log(dataObj);
  dataObj.bands.forEach(e => {
    console.log(e);
  });
  const res = dataObj.bands.concat(newMovies);
  dataObj.bands = res;
  const resJson = JSON.stringify(dataObj, null, 2);
  fs.writeFile("./data-2.json", resJson, "utf8", err => {
    if (err) throw err;
    console.log("json is written");
  });
});

// let newBands = ["Bauhaus", "Catholic Discipline", "Wire", "The Pop Group"];

// fs.readFile("./data.json", "utf8", (err, data) => {
//   if (err) throw err;
//   const dataObj = JSON.parse(data);
//   // console.log(dataObj);
//   dataObj.bands.forEach(e => {
//     console.log(e);
//   });

//   const res = dataObj.bands.concat(newBands);
//   dataObj.bands = res;
//   const resJson = JSON.stringify(dataObj, null, 2);
//   fs.writeFile("./data-2.json", resJson, err => {
//     if (err) throw err;
//     console.log("File has been updated");
//   });
// });

var data = {};
data.table = [];
for (i = 0; i < 26; i++) {
  var obj = {
    id: i,
    square: i * i
  };
  data.table.push(obj);
}
fs.writeFile("input.json", JSON.stringify(data), function(err) {
  if (err) throw err;
  console.log("complete");
});
