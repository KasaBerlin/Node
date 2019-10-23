const fs = require("fs");

fs.readFile("./keyboard.txt", "utf8", (data, err) => {
  if (err) throw err;
  console.log(data);
});
