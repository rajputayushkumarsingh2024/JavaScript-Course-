/*

#### 7. **Sum of All Numbers in an Array**

**🧠 Task:**
Write a function that takes an array of numbers and returns the sum.

```js
// Example:
sumArray([1, 2, 3, 4]); // Output: 10
```
*/


let sumArray = (arr) => {
  let sum = 0;

  for(let i=0; i<arr.length; i++){
    sum += arr[i]
  }
  console.log(sum)
}

sumArray([1, 2, 3, 4]); 
sumArray([1, 2, 3, 4, 10]); 
