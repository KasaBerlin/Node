//************************************************
// PATH
//************************************************

// The path module is used to work with different paths on our file system

// console.log(`Directory name: `, __dirname);
// // The absolute path of the directory containing the currently executing file

// console.log(`File name: `, __filename);
// // The absolute path of the currently executing file

// const path = require("path");

// const basename = path.basename("Users/Benjamin/DCI/materials/js/node/index.js");

// const dirname = path.dirname("Users/Benjamin/DCI/materials/js/node/index.js");

// const extname = path.extname("Users/Benjamin/DCI/materials/js/node/index.js");

// const aPath = path.join("Benja", "DCI", "materials", "app.js");

// console.log(`Basename: `, basename);
// console.log(`Dirname: `, dirname);
// console.log(`Extname: `, extname);
// console.log(`New Path:  `, aPath);

// // Parse a path into an object

// const parsedObj = path.parse("Users/Benjamin/DCI/materials/js/node/index.js");
// console.log(parsedObj);

//*************************************************
// FS
//*************************************************

// const fs = require("fs");

// console.log(fs);

// Two ways to read files -
// synchronously - blocking
// asynchronously - non-blocking

// const startingTime = new Date().getTime();

// console.log("I am about to read a file asynchronously");
// fs.readFile("./index.html", "utf8", (err, data) => {
// 	if (err) {
// 		console.error(err);
// 	}
// 	console.log("I am reading the file from async part 1");
// 	console.log("I run async", new Date().getTime() - startingTime);
// 	console.log(data);
// 	console.log("I am done async part 1");
// 	console.log("-------------------------------------------------------");
// });

// console.log("I am about to read a file synchronously");
// const data = fs.readFileSync("./data.txt", "utf8");
// console.log("I run sync", new Date().getTime() - startingTime);
// console.log(data);
// console.log("I am done synced!");
// console.log("--------------------------------------------------------------");

// const data = "cerebro. Nescio brains an Undead zombies.";

// add to text
// fs.appendFile("./data.txt", data, err => {
// 	if (err) throw err;
// 	console.log("Updated data file!!");
// });

// // write to text (destructive)
// fs.writeFile("./data.txt", data, err => {
// 	if (err) throw err;
// 	console.log("Updated data file!!");
// });

//******************************************
// JSON
//******************************************

// let newBands = ["Bauhaus", "Catholic Discipline", "Wire", "The Pop Group"];

// fs.readFile("./data.json", "utf8", (err, data) => {
// 	if (err) throw err;
// 	const dataObj = JSON.parse(data);
// 	// console.log(dataObj);
// 	dataObj.bands.forEach(e => {
// 		console.log(e);
// 	});

// 	const res = dataObj.bands.concat(newBands);
// 	dataObj.bands = res;
// 	const resJson = JSON.stringify(dataObj, null, 2);
// 	fs.writeFile("./data-2.json", resJson, err => {
// 		if (err) throw err;
// 		console.log("File has been updated");
// 	});
// });
