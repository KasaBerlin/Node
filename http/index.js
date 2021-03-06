// http
// The http.createServer() method
// - turns your computer into an HTTP server
// - creates an HTTP Server object.
// - can listen to ports on your computer and execute a function, a requestListener, each time a request is made

const http = require("http");

// The request response cycle - req, res.write(), res.end()
// The body parameter can be a Buffer object, a String, an object, or an Array

// defining the routes

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello");
    res.end(); // end response
  }
  if (req.url === "/dci/fantastic14") {
    res.write("Welcome to our class page");
    res.end();
  }
});

server.listen(3000, () => console.log("Listening on port 3000..."));

// const axios = require("axios");

// const url = "https://official-joke-api.appspot.com/jokes/random";

// axios.get(url).then(response => {
//   //   console.log(response.data);
//   let joke = response.data;
//   console.log(joke.setup);
//   for (let i = 0; i < 20; i++) {
//     console.log("|");
//   }
//   console.log(joke.punchline);
// });

// the joy of axios

// axios
//   .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
//   .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.explanation);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// AXIOS.all

// axios
//   .all([
//     axios.get(
//       "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-10-29"
//     ),
//     axios.get(
//       "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-10-29"
//     )
//   ])
//   .then(
//     axios.spread((response1, response2) => {
//       console.log(response1.data.url);
//       console.log(response2.data.url);
//     })
//   )
//   .catch(error => {
//     console.error(error);
//   });
