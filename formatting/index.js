// const formatting = require("./formatting");
// const sanatizer = require("./messaging");
// const args = process.argv.slice(2);

// console.log(formatting.trim(args));
// console.log(sanatizer(args));
// console.log(formatting.capitalizeInitial(args));
// console.log(process.argv);

const { prepareString } = require("./formatting");
const { showHelp } = require("./messaging");

let result = "";
const args = process.argv.slice(2);

if (args.includes("--help")) {
  showHelp();
}

// input goes to formatting.js then gets returned back here
result = prepareString(args[0]);

console.log(result);
