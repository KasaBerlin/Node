const fs = require("fs");
const zlib = require("zlib");
const args = process.argv.slice(2);

// Note that node-zlib is only intended for small
// (< 128 KB) data that you already have buffered.
// It is not meant for input/output streams.
// The Buffer class is within the global scope,
// making it unlikely that one would need to ever
// use require('buffer').Buffer.

const zipIt = (input = "input.txt") => {
  const inpUn = fs.createReadStream(input);
  console.log(inpUn);
  // const inp = new Buffer(inpUn);
  const out = fs.createWriteStream("input.txt.gz");
  const gzip = zlib.createGzip();
  // console.log(inp);
  inpUn
    .pipe(gzip)
    .on("error", () => {
      // handle error
    })
    .pipe(out)
    .on("error", () => {
      // handle error
    });
  console.log("File compressed");
};

zipIt(args[0]);
