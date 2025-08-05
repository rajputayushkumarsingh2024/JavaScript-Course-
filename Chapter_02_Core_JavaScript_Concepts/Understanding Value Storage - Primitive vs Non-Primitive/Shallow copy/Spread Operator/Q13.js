/*
#### 🔹 Q2. Merge Two Strings Using Spread

**Task:** Use the spread operator to merge two strings `"Hi"` and `"There"` into an array.
**Expected Output:** `['H', 'i', 'T', 'h', 'e', 'r', 'e']`

```js
let str1 = "Hi";
let str2 = "There";
// Your code here
```
*/

let str1 = "Hi";
let str2 = "There";

console.log([...str1, ...str2])