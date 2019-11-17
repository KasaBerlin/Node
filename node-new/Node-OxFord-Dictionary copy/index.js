const axios = require("axios");
const args = process.argv.slice(2);

function searchWord(word) {
  const word_id = word.toLowerCase();
  const app_id = "34448e4d";
  const app_key = "8726e1133f5b590c2251abad9ba1afba";
  const url = `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word_id}`;
  axios
    .get(url, {
      headers: {
        Accept: "application / json",
        app_id: app_id,
        app_key: app_key
      }
    })
    .then(res => {
      let def = res.data.results[0].lexicalEntries[0].entries[0].senses
        for (let i=0;i<def.length;i++){
          let definitions= definitions.toString()
          console.log(definitions[i].toString())
        }
      );
      console.log(def);
    })
    .catch(err => console.log(err));
}

const search = searchWord(args[0]);
