/*
### 🔸 Q2. Clone an Array

**Task:**
Clone the array using the spread operator. Then push a new value in the cloned array and print both arrays to confirm the original doesn't change.

```js
let original = [10, 20, 30];
// Expected: original = [10, 20, 30], cloned = [10, 20, 30, 40]
```
*/

let original = [10, 20, 30];
console.log("original = ", original)

let cloned = [...original]
cloned.push(40)
console.log("cloned = ", cloned)

