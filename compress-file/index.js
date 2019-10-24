const fs = require("fs");
const zlib = require("zlib");
const args = process.argv.slice(2);

// Note that node-zlib is only intended for small
// (< 128 KB) data that you already have buffered.
// It is not meant for input/output streams.

const gzip = zlib.createGzip();

const zipIt = (input = "input.txt") => {
  const inp = fs.createReadStream(input);
  const out = fs.createWriteStream("newZip.txt.gz");
  inp
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
