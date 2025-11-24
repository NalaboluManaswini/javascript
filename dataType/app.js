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
// const colors = ["red", "black", "pink", "yellow", "purple"]
// console.log(colors[4]);
// 2)Add two new elements to an array of numbers.
// let num1 = [1, 2, 3, 4, 5, 6,]
// num1.push(16)
// console.log(num1);
// let names = ["manu", "pandu", "jasi"]
// names.splice(2, 0, "mansoor")
// console.log(names);

//3) Remove the first element from an array of fruits.
// let fruits = ["apple", "mango", "banana", "greenapples"]
// fruits.unshift("orange")

// console.log(fruits);
// OBJECT QUESTIONS

// Create an object for a laptop with brand, price, and color
// let laptops = {
//     barnd: "hp",
//     price: 300000,
//     color: "black"
// }
// console.log(laptops.barnd);
// const users = [
//     { name: "Vamsee Krishna", age: 25, isMember: true, country: "India", skills: ["JavaScript", "React", "Node.js"] },
//     { name: "John Doe", age: 30, isMember: false, country: "USA" },
//     { name: "Jane Smith", age: 28, isMember: true, country: "UK", skills: ["Python", "Django", "Flask"], companiesWorked: { currentCompany: "Tech Solutions", previousCompany: "Web Innovations" } },
//     { name: "Alice Johnson", age: 22, isMember: false, country: "Canada" }];
// console.log(`${users[2].name} worked as ${users[2].skills[0]} developer at ${users[2].companiesWorked.currentCompany}.`);
// Create an array of 3 student objects (name, age, grade)
// let student = [{
//     name: "manu", age: 22, grade: "+A"
// },
// {
//     name: "pandu", age: 21, grade: "A"
// },
// {
//     name: "jasi", age: 15, grade: "B"
// }]
// student.push({ name: "mansoor ", age: 22, grade: "A" })
// console.log(student)
// Update the salary of the second employee in an array of employee objects.
const employee = [{
    name: "manu", salary: 30000},
{ name: "pandu", salary: 40000 },
{ name: "jasi", salary: 500000 },
{ name: "mansoor", salary: 90000 }];
// employee[1].salary = 100000
for (let i = 0; i < employee.length; i++) {
    console.log(employee[i].salary);
}
// const users = [
//   { name: "Arjun", age: 20 },
//   { name: "Manu", age: 22 },
//   { name: "Jasi", age: 19 }
// ];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].name);
// }
let num = [10,20,30,40,50,60]
num.splice(1,2)
console.log(num)

