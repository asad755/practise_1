let sentence: string = "Hello world! This is TypeScript.";
let words: string[] = sentence.split(" ");
console.log(words);  // Output: [ 'Hello', 'world!', 'This', 'is', 'TypeScript.' ]


let word: string = "TypeScript";
let characters: string[] = word.split("");
console.log(characters);  // Output: [ 'T', 'y', 'p', 'e', 'S', 'c', 'r', 'i', 'p', 't' ]


let data: string = "name:John;age:30;city:New York";
let keyValuePairs: string[] = data.split(";");
console.log(keyValuePairs);  // Output: [ 'name:John', 'age:30', 'city:New York' ]

// Further splitting each key-value pair
keyValuePairs.forEach(pair => {
    let [key, value] = pair.split(":");
    console.log(`Key: ${key}, Value: ${value}`);
});
// Output:
// Key: name, Value: John
// Key: age, Value: 30
// Key: city, Value: New York



let text1: string = "a,b,c,d,e,f";
let limitedSplit: string[] = text1.split(",", 3);
console.log(limitedSplit);  // Output: [ 'a', 'b', 'c' ]


let text: string = "one1two2three3four";
let numbersRemoved: string[] = text.split(/\d/);
console.log(numbersRemoved);  // Output: [ 'one', 'two', 'three', 'four' ]

let original: string = "123-456-7890";
let cleaned: string = original.split("-").join("");
console.log(cleaned);  // Output: '1234567890'

