// Basic type
let isDone = false;
console.log(isDone);
// Arrays
let list = [1, 2, 3];
console.log(list[1]);
// Tupples 
let y;
y = ["hello", 10];
console.log(y[0].substring(1));
// enumm
let x;
x = ["hello", 10];
console.log(x[0].substring(1));
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
// classes
class Greeter {
    greeting;
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
console.log(greeter.greet());
// Function
function add(x, y) {
    return x + y;
}
console.log(add(2, 3));
// geniric
function identity(arg) {
    return arg;
}
console.log(identity("myString"));
/*
// modules
// module1.ts
export const pi = 3.14;

// main.ts
import { pi } from './module1';
console.log(pi);
*/
//type assersion
let someValue = "this is a string";
let strLength = someValue.length;
console.log(strLength);
// union types
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
console.log(padLeft("Hello", 4));
let emp = { name: "John", employeeId: 1234 };
console.log(emp.name);
export {};
