/*

## ✅ Q1. `detectType(value)`

**Write a function that detects the real type of any value.**

function detectType(value) {
  // return like: "String", "Number", "Array", "Object", etc.
}

console.log(detectType(42));             // "Number"
console.log(detectType("Ayush"));        // "String"
console.log(detectType([1, 2]));         // "Array"
console.log(detectType(null));           // "Null"
console.log(detectType(undefined));      // "Undefined"
console.log(detectType(Symbol("x")));    // "Symbol"


🧠 **Hint**: Use `Object.prototype.toString.call(...)`.

*/

// SOLUTION

function detectType(value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}

console.log(detectType(42));             // "Number"
console.log(detectType("Ayush"));        // "String"
console.log(detectType([1, 2]));         // "Array"
console.log(detectType(null));           // "Null"
console.log(detectType(undefined));      // "Undefined"
console.log(detectType(Symbol("x")));    // "Symbol"
