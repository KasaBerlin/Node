let user = {
    name: "John",
    age: 30,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
  };
  
  console.log(user);    // { name: 'John', age: 30, toString: [Function: toString] }
  
​
// The JSON (JavaScript Object Notation) is a general format to represent values and objects.
// Initially it was made for JavaScript, but many other languages have libraries to handle it as well.
// It’s easy to use JSON for data exchange when the client uses JavaScript and the server is written on Ruby/PHP/Java/Whatever.
​
// JavaScript provides methods:
// -    JSON.stringify to convert objects into JSON.
// -    JSON.parse to convert JSON back into an object.
​
// JSON.stringify
​
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};
​
let json = JSON.stringify(student);
​
console.log(json);          // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}
console.log(typeof json);   // string
​
// The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object. 
​
// Please note that a JSON-encoded object has several important differences from the object literal:
// -    Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
// -    Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30.
​
// JSON.stringify can be applied to primitives as well.
​
// a number in JSON is just a number
console.log( JSON.stringify(1) )            // 1
​
// a string in JSON is still a string, but double-quoted
console.log( JSON.stringify('test') )       // "test"
​
console.log( JSON.stringify(true) );        // true
​
console.log( JSON.stringify([1, 2, 3]) );   // [1,2,3]
​
// ------------------------------
// JSON is data-only cross-language specification, so some JavaScript-specific object properties are skipped by JSON.stringify.
// Namely:
// -    Function properties (methods).
// -    Symbolic properties.
// -    Properties that store undefined.
​
let user2 = {
    sayHi() {                           // ignored
      console.log("Hello");
    },
    [Symbol("id")]: 123,                // ignored
    something: undefined                // ignored
};
​
console.log( JSON.stringify(user2) );   // {} (empty object)
​
// ------------------------------
// nested objects are supported and converted automatically.
​
let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
};
​
console.log( JSON.stringify(meetup) );
​
// ------------------------------
// The important limitation: there must be no circular references:
let room = {
    number: 23
};
​
let meetup2 = {
    title: "Conference",
    participants: ["john", "ann"]
};
​
meetup2.place = room;       // meetup references room
room.occupiedBy = meetup2; // room references meetup
​
// JSON.stringify(meetup2); // Error: Converting circular structure to JSON
​
// ------------------------------ //// ------------------------------ //
// JSON.parse
// To decode a JSON-string, we need another method named JSON.parse.
​
let numbers = [1, 2, 3];
numbers = JSON.stringify(numbers);
console.log(numbers);
​
numbers = JSON.parse(numbers);
​
console.log( numbers[1] );      // 2
​
// Or for nested objects:
​
let user3 = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
​
user3 = JSON.parse(user3);
​
console.log( user3.friends[1] ); // 1
​
​
// ------------------------------ //// ------------------------------ //
​
// Points to remember:
// -    JSON does not support comments. Adding a comment to JSON makes it invalid.
// -    property name should be in double quotes
// -    single quotes in value must be double
// -    single quotes in key must be double
// -    no "new" is allowed, only bare values
​
// There’s another format named JSON5, which allows unquoted keys, comments etc. But this is a standalone library, not in the specification of the language.
​
​
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
​
let meetup3 = JSON.parse(str);
​
// console.log( meetup3.date.getDate() ); // Error!
// The value of meetup.date is a string, not a Date object.
​
let meetup3 = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
​
console.log( meetup3.date.getDate() ); // now works!
​
​
// It works for nested objects as well:
​
let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
}`;
​
schedule = JSON.parse(schedule, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
});
​
console.log( schedule.meetups[1].date.getDate() ); // works!
​
// ----------------------------- //
// try catch error
​
let badJson = "{ bad json }";
​
try {
​
  let user = JSON.parse(badJson); // <-- when an error occurs...
  alert( user.name ); // doesn't work
​
} catch (e) {
  // ...the execution jumps here
  alert( "Our apologies, the data has errors, we'll try to request it one more time." );
  alert( e.name );
  alert( e.message );
}