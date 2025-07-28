/*
### **2. Data Types Checker**

**Difficulty**: Easy
**Topic**: Variables, Data Types

🧠 *Task*: Create 5 variables, each with a different **primitive** data type. Then print the type of each variable using `typeof`.

```js
Example Output:
1. string
2. number
3. boolean
4. undefined
5. object (for null)
```

---

*/

// SOLUTION

let name = "Ayush";
let age = 20;
let isActive = false;
let friends;
let money = null;

console.log(`${name} => ${typeof name}`)
console.log(`${age} => ${typeof age}`)
console.log(`${isActive} => ${typeof isActive}`)
console.log(`${friends} => ${typeof friends}`)
console.log(`${money} => ${typeof money}`)
