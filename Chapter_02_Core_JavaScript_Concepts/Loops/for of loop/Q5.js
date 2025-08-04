/*
### **Q5. Capitalize First Letter of Each Word**

🧠 **Task:**
Given an array of words, use a `for...of` loop to return a **new array** where the first letter of each word is capitalized.

```js
let words = ["hello", "world", "openai", "ayush"];
```

**Expected Output:**

```
["Hello", "World", "Openai", "Ayush"]
```

*/

let words = ["hello", "world", "openai", "ayush"];

let arr = [];
for(let word of words){
  arr.push(word[0].toUpperCase() + word.slice(1))
}

console.log(arr)