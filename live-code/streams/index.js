const fs = require("fs");

// Read stream = where we read the file
// write stream = duh

// const readStream = fs.createReadStream("data.txt", "utf8");
// const writeStream = fs.createWriteStream("./dracula.txt", "utf8");

// Now we need to "pipe" these together...

// readStream.pipe(writeStream);

// With streams we store the data in a buffer.
// This is stored in buffer memory which is a place in memory to store data right
// before it is used.

// readStream.on("data", ch => {
// 	let res = ch.toUpperCase();
// 	writeStream.write(res);
// });
// on() is a listener function
// emitter.on(eventname, listener)
// The write method writes the specified string into a buffer.

const myStream = fs.createReadStream("data.txt", "utf8");

// The buffer splits the data into "chunks";

let chunkNumber = 1;

let word = "Transylvania?";
let wordCounter = 0;

myStream.on("data", chunk => {
	console.log(`Reading chunk no ${chunkNumber}`);
	chunkNumber++;
	console.log(chunk.length);

	let arr = chunk.split(" ");
	// creates an array of individual words

	arr.forEach(el => {
		if (el === word) wordCounter++;
	});
	console.log(`I found the word ${word} ${wordCounter} times`);
	// wordCounter = 0;
});

myStream.on("end", () => {
	console.log("=============================================================");
});
