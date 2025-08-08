/*
### 🔸 **Q3. Clone and Add City**

**🧠 Task:**
Write a function named `cloneAndAddCity` that accepts an object with `name` and `age` properties.
Return a new **shallow copy** of the object with an extra property: `city` set to `"Patna"`.
The original object should stay the same.

**📦 Example:**
cloneAndAddCity({ name: "Ayush", age: 19 });
// Output: { name: "Ayush", age: 19, city: "Patna" }

*/

let cloneAndAddCity = (obj) => {
  let copiedObj = Object.assign({}, obj);
  copiedObj.city = "Patna"
  return copiedObj;
}

let originalObj = { name: "Ayush", age: 19 }
console.log("Original Object = ", originalObj)

let copiedObject = cloneAndAddCity(originalObj)
console.log("Copied Object = ", copiedObject)