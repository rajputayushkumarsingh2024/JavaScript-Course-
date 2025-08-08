/*
🔸 Q2. Clone and Update Age
🧠 Task:
Write a function called cloneAndUpdateAge that takes an object with properties name and age as input.
The function should return a new shallow-copied object where the age is updated to 21.
Make sure the original object is not changed.

📦 Example:
cloneAndUpdateAge({ name: "Ayush", age: 19 });
// Output: { name: "Ayush", age: 21 }

*/

let cloneAndUpdateAge = (obj) => {
  let copiedObj = Object.assign({}, obj)
  copiedObj.age = 21;
  return copiedObj
}

let originalObject = { name: "Ayush", age: 19 }
console.log("Original Object =", originalObject)

let copiedObject = cloneAndUpdateAge(originalObject)
console.log("Copied Object =", copiedObject)