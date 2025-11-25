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
// 2)Using else-if, check if a number is positive, negative, or zero.

