/*
#### 🔹 Q15. Reverse a String Using Spread

**Task:** Use the spread operator to reverse the string `"JavaScript"`.
**Expected Output:** `"tpircSavaJ"`

```js
let word = "JavaScript";
// Your code here
```
*/

let word = "JavaScript";
console.log(word)

let reverse = [...word].reverse().join("")
console.log(reverse)