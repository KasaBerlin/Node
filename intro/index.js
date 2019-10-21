// console.log("Hello Richard");
// console.log(global);

// in Node window is called global

// console.log(global.process);
// console.log(process.argv.slice(2));

const _ = require("lodash");

console.log(_.isString("true"));
console.log(_.includes([1, 2, 3, 4, 5], 4));
console.log(_.upperFirst("berlin"));
console.log(_.kebabCase("Node js"));
console.log(_.add(100, 25));
