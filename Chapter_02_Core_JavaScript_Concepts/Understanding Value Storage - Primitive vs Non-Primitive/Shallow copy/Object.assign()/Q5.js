/*

### 🔸 **Q5. Clone and Rename Key**

**🧠 Task:**
Write a function `cloneAndRenameKey` that takes an object with a key `username`.
The function should return a new **shallow copy** of the object where the `username` key is **renamed to** `name` (with the same value).
Make sure the original object is not modified.

**📦 Example:**

cloneAndRenameKey({ username: "Ayush", age: 19 });
// Output: { name: "Ayush", age: 19 }

*/

let cloneAndRenameKey = (obj) => {
  let copiedObject = Object.assign({}, obj);
  copiedObject.name = copiedObject.username;
  delete copiedObject.username;
  return copiedObject
}

let originalObj = { username: "Ayush", age: 19 };
console.log("Original Object = ", originalObj)

let copiedObj = cloneAndRenameKey(originalObj)
console.log("Copied Object = ", copiedObj)