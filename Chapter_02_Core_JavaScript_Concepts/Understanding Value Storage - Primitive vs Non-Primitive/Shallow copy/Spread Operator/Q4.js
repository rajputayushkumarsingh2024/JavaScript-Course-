/*
### 🔸 Q4. Sum All Elements from Multiple Arrays

**Task:**
Use spread operator to merge multiple arrays and then find the sum of all elements.

```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
// Expected Output: 21

*/

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let arr4 = [...arr1, ...arr2, ...arr3]
console.log(arr4)

let sum = 0
for(let i=0; i<arr4.length; i++){
  sum = sum + arr4[i]
}
console.log(sum)