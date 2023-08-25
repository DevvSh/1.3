// String methods
const stringExample = "Hello, World!";
document.getElementById("string-length").innerHTML = "String Length: " + stringExample.length;
document.getElementById("uppercase").innerHTML = "Uppercase: " + stringExample.toUpperCase();
document.getElementById("lowercase").innerHTML = "Lowercase: " + stringExample.toLowerCase();
document.getElementById("substring").innerHTML = "Substring: " + stringExample.substring(0, 5);
document.getElementById("char-at").innerHTML = "Character at index 7: " + stringExample.charAt(7);

// Number methods
const numExample = 123.456;
document.getElementById("fixed-decimal").innerHTML = "Fixed decimal: " + numExample.toFixed(2);
document.getElementById("exponential").innerHTML = "Exponential notation: " + numExample.toExponential(2);
document.getElementById("rounded").innerHTML = "Rounded: " + Math.round(numExample);
document.getElementById("square-root").innerHTML = "Square root: " + Math.sqrt(numExample);
document.getElementById("absolute-value").innerHTML = "Absolute value: " + Math.abs(-numExample);

// Array methods
const arrayExample = [1, 2, 3, "four", "five"];
document.getElementById("array-length").innerHTML = "Array length: " + arrayExample.length;
document.getElementById("joined-elements").innerHTML = "Joined elements: " + arrayExample.join(" - ");
document.getElementById("first-element").innerHTML = "First element: " + arrayExample[0];
document.getElementById("last-element").innerHTML = "Last element: " + arrayExample[arrayExample.length - 1];
document.getElementById("index-of").innerHTML = "Index of 'four': " + arrayExample.indexOf("four");

// Date methods
const dateExample = new Date();
document.getElementById("current-date").innerHTML = "Current date: " + dateExample.toDateString();
document.getElementById("current-time").innerHTML = "Current time: " + dateExample.toTimeString();
document.getElementById("utc-date").innerHTML = "UTC Date: " + dateExample.toUTCString();
document.getElementById("day-of-month").innerHTML = "Day of the month: " + dateExample.getDate();
document.getElementById("month").innerHTML = "Month: " + (dateExample.getMonth() + 1);

// Function methods
function greet(name) {
    return "Hello, " + name + "!";
}
const message = greet("Dev");
document.getElementById("greeting").innerHTML = "Greeting: " + message;

function add(a, b) {
    return a + b;
}
document.getElementById("sum").innerHTML = "Sum of 8 and 5 is " + add(8, 5);
