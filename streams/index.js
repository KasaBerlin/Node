const fs = require("fs");

// Read stream = where we read the file
// Write Stream

// Piping
// Piping is a great mechanism in which you can read data from the source and write to destination
// without managing the flow yourself.

// const readStream = fs.createReadStream("data.txt", "utf8");
// const writeStream = fs.createWriteStream("./dracula.txt", "utf8");

// Now we need to "pipe" these together...

// readStream.pipe(writeStream);

// With streams we can store the data in a buffer,
// This is stored in buffer memory which is a place in your memory to store data right before it is used.

// readStream.on("data", ch => {
//   let res = ch.toUpperCase();
//   writeStream.write(res);
// });
// on() is a listener function
// read Stream is a emitter - emitter.on(eventname,listener)
// write method writes the specified string(res) into a buffer

const myStream = fs.createReadStream("data.txt", "utf8");

// The buffer splits the data into "chunks"

let chunkNumber = 1;

let word = "Transylvania";
let wordCounter = 0;

let regex = new RegExp(word.toLowerCase(), "g");
// to make the search case insensitive (finding all different spellings like Dracula, DRACULA and dracula) the toLowerCase() method is used on the word we are searching for

myStream.on("data", chunk => {
  console.log(`Reading chunk no ${chunkNumber}`);
  chunkNumber++;
  console.log(chunk.length);
  let arr = chunk.split(" ");
  // creates an array of individual words
  if (el.toLowerCase().match(regex)) wordCounter++;
  // to achieve the finding of the different spellings of the search word, we also need use the to toLowerCase() method on the words in the text
  });

  console.log(`I found the word ${word} ${wordCounter} times`);
  wordCounter = 0;
});

myStream.on("end", () => {
  console.log("======================================================");
});
