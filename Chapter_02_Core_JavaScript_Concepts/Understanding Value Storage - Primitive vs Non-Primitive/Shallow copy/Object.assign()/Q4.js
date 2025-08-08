/*

### 🔸 **Q4. Clone and Remove Age**

**🧠 Task:**
Create a function `cloneAndRemoveAge` that receives an object containing `name` and `age`.
Return a new **shallow-copied** object where the `age` property has been removed.
The original object must not be modified.

**📦 Example:**

cloneAndRemoveAge({ name: "Ayush", age: 19 });
// Output: { name: "Ayush" }

*/

let cloneAndRemoveAge = (obj) => {
  let copiedObject = Object.assign({}, obj);
  delete copiedObject.age
  return copiedObject
}

let originalObj = { name: "Ayush", age: 19 }
console.log("Original Object = ", originalObj)

let copiedObj = cloneAndRemoveAge(originalObj)
console.log("Copied Object = ", copiedObj)