// VALIDATION

const validator = require("validator");

const test = validator.isEmail("katrinsalac@gmail.com");
const test2 = validator.normalizeEmail("KaTrIn@GMAIL.COM");
console.log(test);
console.log(test2);

// REGULAR EXPRESSIONS (REGEX)
// A regular expression is a sequence of charakters used for parsing strings
// These are often used to perform searches and validate string data

const str = "How much is that doggy in the window window?";
const regex = /bird|window/i; //true if one is found
const isWindow = regex.test(str);
console.log(isWindow);

// PASSWORD REGEX

// - 6 to 12 characters in length
// - Must have at least one Uppercase
// - Must have at least one digit
// - Should contain other characters

const regex2 = /[a-zA-Z]{6,12}|[A-Z]|[0-9]|\w/g;
const isChecked = regex2.test(str);
const isMatched = str.match(regex2);
console.log(isChecked);
// console.log(isMatched);
