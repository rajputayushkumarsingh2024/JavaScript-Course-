/*

### 🔴 Q6. Data Type Tracker

Write a function `trackTypes(arr)` that accepts an array of values (like strings, numbers, booleans, null, undefined, etc.) and returns an **object** showing how many of each data type is present.

📥 Example Input:

```js
["Ayush", 19, true, null, undefined, 22, false]
```

📤 Example Output:

```js
{
  string: 1,
  number: 2,
  boolean: 2,
  object: 1,
  undefined: 1
}

*/

// SOLUTION 

let trackTypes = (arr) => {
  let obj = {}
  for(let i = 0; i < arr.length; i++){
    if(obj[typeof arr[i]]){
      obj[typeof arr[i]]++
    }
    else{
      obj[typeof arr[i]] = 1
    }
  }

  console.log(obj)
}
trackTypes(["Ayush", 19, true, null, undefined, 22, false])