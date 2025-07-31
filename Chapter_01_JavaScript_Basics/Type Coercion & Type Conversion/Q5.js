/*
### 🔺 Hard Q1: Type Analyzer
Write a function `analyzeArray(arr)` that takes an array of values and returns:

* A count of each **type**
* How many values are **truthy** and how many are **falsy**

**Example Input:**  analyzeArray(["", 0, "Hello", null, 42, undefined, [], false])

**Expected Output:**
{
  types: {
    string: 2,
    number: 1,
    object: 1,
    undefined: 1,
    boolean: 1
  },
  truthy: 3,
  falsy: 5
}

*/

// SOLUTION 

let arr = ["", 0, "Hello", null, 42, undefined, [], false]

let analyzeArray = (arr) => {
  let obj = {
    types: {},
    truthy: 0,
    falsy: 0
  }

  for(let i=0; i<arr.length; i++){
    let datatype = typeof arr[i]
    // console.log(datatype)
    if(obj.types[datatype] === undefined){
      obj.types[datatype] = 1
    }
    else{
      obj.types[datatype] += 1
    }
    if(arr[i]){
      obj.truthy++
    }
    else{
      obj.falsy++
    }
  }
  console.log(obj)
}

analyzeArray(arr) 