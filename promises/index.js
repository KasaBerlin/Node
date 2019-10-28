// promises

// introduced in ES6

// A way for to easily handle asynchronous requests

// const blah = true;
// const promise = new Promise((resolve, reject) => {
//   if (blah) resolve("I have been resolved");
//   else reject("I have been rejected...");
// });

// console.log(promise);

// 3 states
// 1. pending
// 2. resolved
// 3. rejected

////////////////////////////////////////////////////
// CALLBACK HELL (pyramid of doom)

// getData(function(x) {
//   console.log(x);
//   getMoreData(x, function(y) {
//     console.log(y);
//     getSomeMoreData(y, function(z) {
//       console.log(z);
//     });
//   });
// });

// // PROMISE ME...

// getData()
//   .then(x => {
//     console.log(x);
//     return getMoreData(x);
//   })
//   .then(y => {
//     console.log(y);
//     return getSomeMoreData(y);
//   })
//   .then(z => {
//     console.log(z);
//   });

/////////////////////////////////////////////

// const promise = new Promise((resolve, reject) => {
//   const randomNumber = Math.random();
//   if (randomNumber < 0.6) resolve("Its all good!");
//   else reject(new Error("Its all gone wrong..."));
// });

// // resolve= truthy reject=falsy

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// console.log(`promise - `, promise);

// CHAINING PROMISES

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 is resolved");
//   }, 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2 is resolved");
//   }, 4000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 3 is resolved");
//   }, 6000);
// });

// promise1
//   .then(data => {
//     console.log(data);
//     return promise2;
//   })
//   .then(data2 => {
//     console.log(data2);
//     return promise3;
//   })
//   .then(data3 => {
//     console.log(data3);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// bad practice - pyramid of doom

// promise1.then(data => {
//   console.log(data);
//   promise2.then(data => {
//     console.log(data);
//     promise3.then(data => {
//       console.log(data);
//     });
//   });
// });

// PROMISE.ÁLL

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 1 resolved"), 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise 2 resolved"), 1500);
// });

// Promise.all([promise1, promise2])
//   .then(data => console.log(data[0], data[1]))
//   .catch(error => console.log(error));

// here the data argument inside the then() method is an ARRAY which contains promise values
// in the same order as defined in the promise array passed to Promise.all

// ASYNC / AWAIT

// const who = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Count Dracula");
//     }, 2000);
//   });
// };

// const what = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("lurks");
//     }, 3000);
//   });
// };

// const where = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("in the shadows");
//     }, 5000);
//   });
// };

// const msg = async () => {
//   const a = await who();
//   const b = await what();
//   const c = await where();
//   console.log(`${a} ${b} ${c}`);
// };

// msg();

// rejects logs error (catch)  resolves logs data

// node-fetch

const fetch = require("node-fetch");

// const fetchUsers = async endpoint => {
//   try {
//     const res = await fetch(endpoint);
//     let data = await res.json();
//     data = data.map(user => user.username);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchUsers("http://jsonplaceholder.typicode.com/users");

// PROMISIFY
// It coverts a callback-based function to a promise - based one
// If you hand the path of a file to the following script, it prints its contents.

const fs = require("fs");
const { promisify } = require("util");

// WITHOUT

// fs.readFile("data.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// WITH
const myReadFileAsync = promisify(fs.readFile);

myReadFileAsync("data.txt", "utf8").then(data => {
  console.log(data);
});
