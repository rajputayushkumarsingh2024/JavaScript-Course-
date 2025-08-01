/*

## ✅ Q4. `convertToJSON(value)`

**Convert any value to its JSON string version using `JSON.stringify`, but if it can't be converted, return `"Invalid JSON"`**

```js
function convertToJSON(value) {
  // try JSON.stringify and catch any error
}

console.log(convertToJSON({ name: "Ayush" })); // '{"name":"Ayush"}'
console.log(convertToJSON(() => {}));          // "Invalid JSON"
console.log(convertToJSON(undefined));         // "Invalid JSON"

*/

// SOLUTION

function convertToJSON(value) {
  try{
    let result = JSON.stringify(value)
    return result === undefined ? "Invalid JSON" : result;
  }
  catch(error){
    return("Invalid JSON")
  }
}

console.log(convertToJSON({ name: "Ayush" })); // '{"name":"Ayush"}'
console.log(convertToJSON(() => {}));          // "Invalid JSON"
console.log(convertToJSON(undefined));         // "Invalid JSON"