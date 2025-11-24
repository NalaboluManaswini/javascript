// string method
// 1)lenght
// let course = "Javascript is so cool"
// console.log(course.length) ==>it will give the length of it
// // 2)indexof
// console.log(course.indexOf('J'))
// console.log(course.lastIndexOf(''));
// console.log(course.trimEnd());
// console.log(course.replace('so','a'))
// ;
// console.log(course.substring(2,1));
// console.log(course.slice(5,8))
// console.log(course.charAt(9));
// ;
// Given a string, convert it to uppercase using a string method.
let user = "manaswini is completed btech"
console.log(user.charAt(0).toUpperCase() + user.slice(1));
const text = "mAnASwInI    ";
console.log(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
console.log(text.length);
console.log(text.trim());
console.log(user.slice(0, 5));
console.log(user.replace("manaswini", "manu"));
console.log(text.toLowerCase());
console.log(user.includes("the"));
// join two strings using a string method.
let first = "hello";
let second = "world";
// let result = first.concat("", second);
let result = first +" "+second;
console.log(`${first} ${second}`);


console.log(result);


// Split a sentence into an array of words.
let sentence="javascript    is    very     powerful";
console.log(sentence.split(/\s+/));


// Find the index of a particular character in a string.
let char = "manaswini";
console.log(char.indexOf("s"));













