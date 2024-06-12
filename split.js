let sentence = "Hello world! This is TypeScript.";
let words = sentence.split(" ");
console.log(words); // Output: [ 'Hello', 'world!', 'This', 'is', 'TypeScript.' ]
let word = "TypeScript";
let characters = word.split("");
console.log(characters); // Output: [ 'T', 'y', 'p', 'e', 'S', 'c', 'r', 'i', 'p', 't' ]
let data = "name:John;age:30;city:New York";
let keyValuePairs = data.split(";");
console.log(keyValuePairs); // Output: [ 'name:John', 'age:30', 'city:New York' ]
// Further splitting each key-value pair
keyValuePairs.forEach(pair => {
    let [key, value] = pair.split(":");
    console.log(`Key: ${key}, Value: ${value}`);
});
// Output:
// Key: name, Value: John
// Key: age, Value: 30
// Key: city, Value: New York
let text1 = "a,b,c,d,e,f";
let limitedSplit = text1.split(",", 3);
console.log(limitedSplit); // Output: [ 'a', 'b', 'c' ]
let text = "one1two2three3four";
let numbersRemoved = text.split(/\d/);
console.log(numbersRemoved); // Output: [ 'one', 'two', 'three', 'four' ]
let original = "123-456-7890";
let cleaned = original.split("-").join("");
console.log(cleaned); // Output: '1234567890'
export {};
