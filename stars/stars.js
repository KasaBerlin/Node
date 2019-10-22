const _ = require("lodash");
module.exports = (numStars, name) => {
  const toNum = parseInt(numStars);
  if (!numStars || !name) {
    const star = _.fill(Array(10), "*");
    return `${star.join("")}\nhi\n${star.join("")}`;
  } else {
    const star = _.fill(Array(toNum), "*");
    const starSign = `${star.join("")}\n${name}\n${star.join("")}`;
    return starSign;
  }
};

// numStars=10, name="hi"
// console.log("*".repeat(stars));
// console.log(name);
// console.log("*".repeat(stars));
