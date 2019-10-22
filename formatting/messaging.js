// module.exports = function showhelp(input) {
//   if (input.includes("--help")) {
//     let output = input.toString();
//     let city =
//       output.charAt(0).toUpperCase() +
//       output.slice(1, output.length).toLowerCase();
//     if (output.match(/\W/gi).length > 1) {
//       output = input.join("");
//       if (output.charAt(0).match(/[A-Z]/) === null) {
//         return city.replace(/,/g, " ");
//       }
//     }
//   } else return null;
// };

module.exports.showHelp = () => {
  const helpText = `HELP TEXT`;
  console.log(helpText);
};
