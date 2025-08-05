/*
### 🔸 Q6. Clone an Object

**Task:**
Clone the object using the spread operator. Then change a value in the cloned object and show that the original object doesn't change.

```js
let person = { name: "Ayush", age: 19 };
// Expected:
// original = { name: "Ayush", age: 19 }
// clone = { name: "Ayush", age: 20 }
```

*/

let person = { name: "Ayush", age: 19 };
console.log("original =", person)

let clone = {...person}
clone.age = 20;
console.log("clone =", clone)