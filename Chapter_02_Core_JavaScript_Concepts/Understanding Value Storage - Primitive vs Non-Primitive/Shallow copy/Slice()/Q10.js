/*
### ✅ Q5. Clone Without Middle Object

**Task:**
Write a function `cloneWithoutMiddle` that:

* Takes an array with **odd number of objects**
* Returns a **new array without the middle object**
* Use only `slice()` for cloning

```js
const arr = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 }
];

cloneWithoutMiddle(arr);
// returns: [{id: 1}, {id: 2}, {id: 4}, {id: 5}]
```

*/

const arr = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 }
];

let cloneWithoutMiddle = (arr) => {
    let mid = Math.floor(arr.length / 2);

  let leftPart = arr.slice(0, mid);     
  let rightPart = arr.slice(mid + 1); 

  console.log([...leftPart, ...rightPart])
}

cloneWithoutMiddle(arr);