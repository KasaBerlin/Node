// module.exports = {
//   trim: function(input) {
//     const output = input
//       .join(" ")
//       .trim()
//       .replace("  ", " ");
//     return output.replace(/,/g, " ");
//   },
//   capitalizeInitial: function(input) {
//     const str = input.toString();
//     const up = str.charAt(0).toUpperCase();
//     const together = up + str.slice(1, str.length).toLowerCase();
//     return together.replace(/,/g, " ");
//   }
// };

module.exports.prepareString = input => {
  let result = removeWhiteSpace(input);
  let tempArr = result.split("");
  tempArr = tempArr.map(el => capitalizeInitial(el));
  result = tempArr.join("");
  return result;
};
const removeWhiteSpace = input => {
  let result = input.trim();
  return result;
};
const capitalizeInitial = input => {
  let result = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  return result;
};
