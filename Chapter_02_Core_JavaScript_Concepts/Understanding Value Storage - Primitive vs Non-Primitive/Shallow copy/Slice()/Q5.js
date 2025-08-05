/*
### 🔹 **Q5. Clone All But Middle Elements**

🧠 **Task:**
Write a function `cloneWithoutMiddle` that:

* Takes an array with an **odd number of elements**,
* Removes the **middle element** using `slice()` (i.e., create a shallow copy **without** the middle element),
* Returns the new array.

```js
// Example:
cloneWithoutMiddle([10, 20, 30, 40, 50])
// Output: [10, 20, 40, 50]
```

> 💡 Use `slice()` twice to get two parts: before and after the middle.

*/

let cloneWithoutMiddle = (arr) => {
  let mid = Math.floor(arr.length / 2);

  let leftPart = arr.slice(0, mid);     
  let rightPart = arr.slice(mid + 1); 

  return [...leftPart, ...rightPart]; 
}

console.log(cloneWithoutMiddle([10, 20, 30, 40, 50]));
console.log(cloneWithoutMiddle([10, 20, 30, 40, 50, 60, 70]));
console.log(cloneWithoutMiddle([10, 20, 30, 40, 50, 60]));