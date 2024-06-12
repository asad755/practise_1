// Basic type
let isDone: boolean = false;
console.log(isDone);

// Arrays

let list: number[] = [1, 2, 3];
console.log(list[1]);

// Tupples 

let y: [string, number];
y = ["hello", 10];
console.log(y[0].substring(1));

// enumm
let x: [string, number];
x = ["hello", 10];
console.log(x[0].substring(1));

// interface
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// classes
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter.greet());

// Function
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(2, 3));

// geniric

function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("myString"));

/*
// modules
// module1.ts
export const pi = 3.14;

// main.ts
import { pi } from './module1';
console.log(pi);
*/


//type assersion

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(strLength);

// union types

function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log(padLeft("Hello", 4));

// Intersection types

interface Person {
    name: string;
}

interface Employee {
    employeeId: number;
}

type EmployeePerson = Person & Employee;

let emp: EmployeePerson = { name: "John", employeeId: 1234 };
console.log(emp.name);

