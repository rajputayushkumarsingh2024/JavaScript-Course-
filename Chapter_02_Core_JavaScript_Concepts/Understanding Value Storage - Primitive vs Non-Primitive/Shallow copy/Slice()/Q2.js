/*
/*
#### ✅ Q2. Get Last Two Items

🧠 Task: Write a function that returns the last 2 elements of an array using `slice()`.

👉 Use negative indexing to extract the last two elements.

```js
// Example:
lastTwo([1, 3, 5, 7, 9])
// Output: [7, 9]

```
*/
let lastTwo = (arr) => {
  console.log(arr.slice(-2))
}

lastTwo([1, 3, 5, 7, 9])
