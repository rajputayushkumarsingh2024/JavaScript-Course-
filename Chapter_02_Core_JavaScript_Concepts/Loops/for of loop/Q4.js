/*
### **Q4. Count Vowels in a String**

🧠 **Task:**
Use a `for...of` loop to count how many vowels (`a, e, i, o, u`) are in the given string:

```js
let msg = "You are learning JavaScript!";
```

**Expected Output:**

```
Number of vowels = 10
```

*/

let msg = "You are learning JavaScript!";

let count = 0;
for (let index of msg.toLowerCase()) {
  if (index == "a" || index == "e" || index == "i" || index == "o" || index == "u") {
    count++
  }
}
console.log("Number of vowels = " + count)