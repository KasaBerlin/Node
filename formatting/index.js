const formatting = require("./formatting");
const args = process.argv.slice(2);

console.log(formatting(args));
console.log(process.argv);
