// Write a program using an else-if ladder to assign grades (A, B, C, D, F) based on marks.
let marks = Number(prompt("Enter your marks :"));

if (isNaN(marks)) {
    alert("Invalid input! Please enter a number.");
} else if (marks < 0 || marks > 100) {
    alert("Marks must be between 0 and 100.");
} else if (marks >= 90) {
    alert("Grade: A");
} else if (marks >= 80) {
    alert("Grade: B");
} else if (marks >= 70) {
    alert("Grade: C");
} else if (marks >= 60) {
    alert("Grade: D");
} else {
    alert("Grade: F");
}
// Write a program using switch-case to print the day of the week based on a number (1–7).
// switch(day){
//     case 1:
//         console.log("monday");
//     break
//     case 2:
//         console.log("tuesday");
            
// }
// Write a switch-case program to check vowel or consonant.
let user = prompt("enter the word :");

