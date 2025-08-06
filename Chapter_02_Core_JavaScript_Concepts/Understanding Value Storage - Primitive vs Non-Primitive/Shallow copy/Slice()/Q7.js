/*
### ✅ Q7. Slice Without Affecting Length

**Task:**
Create a shallow copy using `slice()` of the first two elements in the array below.

```js
const arr = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

// Copy first two items only
```

*/

const arr = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

console.log("Orginal Array = ", arr)

let copiedArr = arr.slice(0, 2);
console.log("Copied Array = ", copiedArr)