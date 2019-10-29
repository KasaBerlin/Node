const axios = require("axios");
const args = process.argv.slice(2);

function searchWord(word) {
  axios
    .get(
      `https://od-api.oxforddictionaries.com/api/v2/entries/<en-gb>/${word.toLowerCase()}`
    )
    .then(res => clg(res))
    .catch(err => console.log(err));
}

const search = searchWord(args[0]);
