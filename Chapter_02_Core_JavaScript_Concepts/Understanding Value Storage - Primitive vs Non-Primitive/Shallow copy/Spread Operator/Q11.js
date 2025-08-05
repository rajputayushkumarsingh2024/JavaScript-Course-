/*
### 🔸 Q6. Combine Multiple Objects with Some Overlapping Keys

**Task:**
Combine 3 objects using spread operator. If keys overlap, the last one should win.

```js
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let obj3 = { c: 5, d: 6 };
// Expected: { a: 1, b: 3, c: 5, d: 6 }
```

*/

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let obj3 = { c: 5, d: 6 };
console.log({...obj1, ...obj2, ...obj3})