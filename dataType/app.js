// // let usersName = ["manu", 22, true, "female"]
// // console.log(usersName[3]);
// // let username = {
// //     name: "manu",
// //     age: 22,
// //     ismember: true,
// //     gender: "female"

// // }
// // console.log(username.name, username.age);
// let users = [{
//     name: "manu",
//     age: 22,
//     gender: "female"

// },
// {
//     name: "pandu",
//     age: 21,
//     gender: "female"
// }
//     ,
// {
//     name: "jasi",
//     age: 15,
//     gender: "male"
// },
// {
//     name: "mansoor",
//     age: 22,
//     gender: "male"
// }
// ]
// console.log("Her Name is " + users[0].name + " and her age is " + users[0].age);
// console.log(users[0].name + "'s Sister " + users[1].name + " is " + users[1].gender + " and her brother " + users[2].name + " is " + users[2].gender);
// 1)Create an array of 5 colors and print the last color.
const colors = ["red", "black", "pink", "yellow", "purple"]
console.log(colors[4]);
// 2)Add two new elements to an array of numbers.
let num1 = [1, 2, 3, 4, 5, 6,]
num1.push(16)
console.log(num1);
let names = ["manu", "pandu", "jasi"]
names.splice( 2,0,"mansoor")
console.log(names);

//3) Remove the first element from an array of fruits.
let fruits = ["apple", "mango", "banana", "greenapples"]
fruits.unshift("orange")

console.log(fruits);




