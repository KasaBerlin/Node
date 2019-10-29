// const fs = require("fs");

// const newStream = fs.createReadStream("data.txt", "utf8");

// let chunkNumber = 1;

// let word = "localhost";
// let wordCount = 0;

// let regex = new RegExp(word.toLowerCase(), "g");

// newStream.on("data", chunk => {
//   chunkNumber++;
//   console.log(`Reading chunk ${chunkNumber}`);
//   let arr = chunk.split(" ");
//   arr.forEach(el => {
//     if (el.toLowerCase().match(regex) || el === word) wordCount++;
//   });
// });

// newStream.on("end", () => {
//   console.log("End of data");
//   console.log(`Number of chunks: ${chunkNumber}`);
//   console.log(`Found '${word}' ${wordCount} time/s`);
// });

const fs = require("fs");
const path = require("path");

console.log("Open big file chunk by chunk and count a work");
console.log(" ");

const [
  word = "localhost",
  filePath = path.join(__dirname, "data.txt")
] = process.argv.slice(2);

let myReadStream = fs.createReadStream(filePath, "utf8");

let i = 0;
let n = 0;

myReadStream.on("data", chunk => {
  n++;
  if (chunk.includes(word)) i++;
  console.log(`Reading chunk ${n}`);
});

myReadStream.on("end", () => {
  console.log("End of data");
  console.log("Number of chunks");
  console.log(`Found ${word} ${i} times`);
});
