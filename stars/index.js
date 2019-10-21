const star = require("./stars");
const args = process.argv.slice(2);

console.log(star(args[0], args[1]));
console.log(process.argv);
