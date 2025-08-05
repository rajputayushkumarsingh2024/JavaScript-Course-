/*
### 🔸 **Q1. Copy Without First and Last Item**

🧠 **Task:**
Write a function `copyMiddle` that returns a **shallow copy** of the array **excluding the first and last item**, using `slice()`.

```js
// Example:
copyMiddle([10, 20, 30, 40, 50])
// Output: [20, 30, 40]
```

> ❗ Don't mutate the original array.

*/

let originalArr = [10, 20, 30, 40, 50]
let arr = [...originalArr]

let copyMiddle = (arr) => {
  return arr.slice(1, arr.length-1)
}

console.log(copyMiddle(arr))
