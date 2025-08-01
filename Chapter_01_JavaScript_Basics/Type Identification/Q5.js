/*

### ✅ **Practice Question: Type Frequency Counter**

```js
/*
🔶 Q: typeFrequencyCounter(arr)

Write a function that takes an array of mixed values and returns an object showing 
how many values there are of each data type.

Use: Object.prototype.toString.call(val) to detect types.

👀 Expected Output Format:
  {
    "[object String]": 2,
    "[object Number]": 3,
    "[object Array]": 1,
    "[object Null]": 1,
    ...
  }

🔁 Example:

typeFrequencyCounter(["hi", 42, [], null, {}, 10, "bye", undefined]);

// ➤ {
//   "[object String]": 2,
//   "[object Number]": 2,
//   "[object Array]": 1,
//   "[object Null]": 1,
//   "[object Object]": 1,
//   "[object Undefined]": 1
// }
*/

// SOLUTION

let typeFrequencyCounter = (arr) => {
  let obj = {}
  for(let i=0; i<arr.length; i++){
    let type = Object.prototype.toString.call(arr[i]).slice(8,-1)
    
    if(obj[type]){
      obj[type]++
    }
    else{
      obj[type] = 1
    }
  }
  console.log(obj)
}

typeFrequencyCounter(["hi", 42, [], null, {}, 10, "bye", undefined]);