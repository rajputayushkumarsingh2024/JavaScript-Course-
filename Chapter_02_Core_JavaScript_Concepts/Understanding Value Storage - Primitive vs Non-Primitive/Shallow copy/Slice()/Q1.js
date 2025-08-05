/*
#### ✅ Q1. Extract First Three Elements

🧠 Task: Write a function that returns the first 3 elements of an array using `slice()`.

```js
// Example:
firstThree([10, 20, 30, 40, 50]) 
// Output: [10, 20, 30]
```
*/

let firstThree = (arr) => {
  return arr.slice(0,3)
}
console.log(firstThree([10, 20, 30, 40, 50]))
console.log(firstThree([20, 30, 60, 40, 50]))
