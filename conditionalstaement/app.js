// Write a program using an else-if ladder to assign grades (A, B, C, D, F) based on marks.
// let marks = Number(prompt("Enter your marks :"));

// if (isNaN(marks)) {
//     alert("Invalid input! Please enter a number.");
// } else if (marks < 0 || marks > 100) {
//     alert("Marks must be between 0 and 100.");
// } else if (marks >= 90) {
//     alert("Grade: A");
// } else if (marks >= 80) {
//     alert("Grade: B");
// } else if (marks >= 70) {
//     alert("Grade: C");
// } else if (marks >= 60) {
//     alert("Grade: D");
// } else {
//     alert("Grade: F");
// }
// Write a program using switch-case to print the day of the week based on a number (1–7).
// switch(day){
//     case 1:
//         console.log("monday");
//     break
//     case 2:
//         console.log("tuesday");

// }
// Write a switch-case program to check vowel or consonant.
// let user = prompt("enter the word :");

// switch (user) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("it is vowel");
//     default:
//         console.log("it is consonant");
        



// }
// let word = prompt("Enter a word:").toLowerCase();

// for (let i = 0; i < word.length; i++) {
//     let ch = word[i];

//     switch (ch) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             console.log(`${ch} → Vowel`);
//             break;

//         default:
//             // Check if it's an alphabet (not number or symbol)
//             if (ch >= "a" && ch <= "z") {
//                 console.log(`${ch} → Consonant`);
//             } else {
//                 console.log(`${ch} → Not a letter`);
//             }
//     }
// }
//  Write a program to swap two numbers without using a third variable (using operators).
let a = 30;
let b= 10;
a=a+b;
b=a-b;
a=a-b;
console.log("a=",a);
console.log("b=",b);

