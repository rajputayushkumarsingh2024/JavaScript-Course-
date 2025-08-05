/*  
### 🔸 Q3. Merge and Remove Duplicates

**Task:**
Merge two arrays and remove duplicates using the spread operator and `Set`.

```js
let a = [1, 2, 3];
let b = [3, 4, 5];
// Expected Output: [1, 2, 3, 4, 5]
```

*/

let a = [1, 2, 3];
let b = [3, 4, 5];

let arr = [...a, ...b]
// console.log(arr)

let finalArr = [...new Set(arr)]
console.log(finalArr)