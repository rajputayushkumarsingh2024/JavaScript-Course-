/*
### 🔸 Q2. Merge Two Objects

**Task:**
Merge two objects using the spread operator.

```js
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
// Expected: { a: 1, b: 2, c: 3, d: 4 }
```

*/

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

console.log({...obj1, ...obj2})