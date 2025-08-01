/*

### ✅ Q2 (Without Using `.filter()`): `filterByType(arr, type)`

**🧠 Task:**
Write a function `filterByType(arr, type)` that takes an array and a type name (like `"Array"`, `"Function"`, `"Object"`) and **returns a new array** that only contains values **of that type**.

**Use a `for` loop**, not `.filter()`.

---

### 🔹 Example:

const data = [1, "one", true, {}, [], null, undefined, () => {}, Symbol("x")];

console.log(filterByType(data, "Array"));     // [ [] ]
console.log(filterByType(data, "Function"));  // [ () => {} ]
console.log(filterByType(data, "Object"));    // [ {} ]

*/

// SOLUTION 

function filterByType(arr, type) {
  let nArr = [];
  for(let i = 0; i < arr.length; i++){
    let datatype = Object.prototype.toString.call(arr[i]).slice(8, -1)
    // console.log(datatype)
    if(datatype == type){
      nArr.push(arr[i])
    }
  }
  return nArr;
}

const data = [1, "one", true, {}, [], null, undefined, () => {}, Symbol("x")];

console.log(filterByType(data, "Array"));     // [ [] ]
console.log(filterByType(data, "Function"));  // [ () => {} ]
console.log(filterByType(data, "Object"));    // [ {} ]
console.log(filterByType(data, "Boolean"));   // [ true ]
console.log(filterByType(data, "Symbol"));    // [ Symbol("x") ]
console.log(filterByType(data, "String"));    // [ "one" ]

