const fs = require("fs");

const newStream = fs.createReadStream("data.txt", "utf8");

let chunkNumber = 1;

let word = "localhost";
let wordCount = 0;

let regex = new RegExp(word.toLowerCase(), "g");

newStream.on("data", chunk => {
  chunkNumber++;
  console.log(`Reading chunk ${chunkNumber}`);
  let arr = chunk.split(" ");
  arr.forEach(el => {
    if (el.toLowerCase().match(regex) || el === word) wordCount++;
  });
});

newStream.on("end", () => {
  console.log("End of data");
  console.log(`Number of chunks: ${chunkNumber}`);
  console.log(`Found '${word}' ${wordCount} time/s`);
});
