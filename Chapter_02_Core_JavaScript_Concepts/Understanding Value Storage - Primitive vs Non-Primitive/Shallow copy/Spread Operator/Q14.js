/*
#### 🔹 Q3. Remove Duplicate Characters from a String

**Task:** Use spread and `Set` to remove duplicates from `"aabbccddeeff"`.
**Expected Output:** `"abcdef"`

```js
let input = "aabbccddeeff";
// Your code here

*/

let input = "aabbccddeeff";
let output = [...new Set(input)]
console.log(output.join(""))