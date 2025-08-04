/*
### **Q5. Compare Two Objects' Keys**

🧠 *Task:*
Write a function that compares the keys of two objects and prints the keys that are **common** in both using a `for...in` loop.

📌 *Example:*

```js
obj1 = {a: 1, b: 2, c: 3}  
obj2 = {b: 4, c: 5, d: 6}

Output:
Common keys: b, c

*/
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { b: 4, c: 5, d: 6 };

let commonKeys = "";

for (let key in obj1) {
  if (key in obj2) {
    commonKeys += key + ", ";
  }
}

commonKeys = commonKeys.slice(0, -2);
console.log("Common keys:", commonKeys);
