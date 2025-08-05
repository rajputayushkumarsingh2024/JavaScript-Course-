/*
### 🔸 **Q4. Shallow Copy a Portion by Index**

🧠 **Task:**
Write a function `copyFromIndex` that takes an array, a `startIndex`, and an `endIndex`, and returns a **shallow copy** of that portion using `slice()`.

```js
// Example:
copyFromIndex(['a', 'b', 'c', 'd', 'e'], 1, 4)
// Output: ['b', 'c', 'd']
```

> ✅ `slice(start, end)` includes start index, but excludes end index.

*/

let copyFromIndex = (arr, startIndex, endIndex) => {
  console.log([...arr].slice(startIndex, endIndex))
}

copyFromIndex(['a', 'b', 'c', 'd', 'e'], 1, 4)
