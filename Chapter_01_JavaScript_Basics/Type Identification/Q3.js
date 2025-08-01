/*

## ✅ Q3. `truthyFalsyCounter(arr)`

**Count how many truthy and falsy values are in an array.**


function truthyFalsyCounter(arr) {
  // return { truthy: ..., falsy: ... }
}

console.log(truthyFalsyCounter([0, "", null, "JS", [], false, 100]));
// ➤ { truthy: 3, falsy: 4 }


🧠 **Hint**: Use `Boolean(val)` or `if (val)` check.

*/

// SOLUTION 

let truthyFalsyCounter = (arr) => {
  let obj = {}
  let truthyCount = 0;
  let falsyCount = 0
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      truthyCount++
    }
    else {
      falsyCount++
    }
  }
  obj.truthy = truthyCount;
  obj.falsy = falsyCount;
  console.log(obj)
}

truthyFalsyCounter([0, "", null, "JS", [], false, 100])