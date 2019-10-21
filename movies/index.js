// const movie = require("./movies");
import movie from "./movies";
const args = process.argv.slice(2);

console.log(movie(args));
console.log(process.argv);
