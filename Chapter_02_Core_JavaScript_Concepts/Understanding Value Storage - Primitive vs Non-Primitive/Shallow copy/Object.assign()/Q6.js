/*
### 🔶 **Q6. Clone and Update Nested Object**

**🧠 Task:**
Write a function `cloneAndUpdateCity` that takes an object containing a nested `address` object, and returns a new **shallow copy** where the `city` inside `address` is updated to `"Delhi"`.

**📦 Example:**

cloneAndUpdateCity({
  name: "Ayush",
  address: {
    city: "Patna",
    state: "Bihar"
  }
});


**Expected Output:**

{
  name: "Ayush",
  address: {
    city: "Delhi",
    state: "Bihar"
  }
}

*/


let cloneAndUpdateCity = (obj) => {
  let copiedObj = Object.assign({}, obj);
  copiedObj.address = Object.assign({}, obj.address)
  copiedObj.address.city = "Delhi";
  return copiedObj;
}

let originalObject = {
  name: "Ayush",
  address: {
    city: "Patna",
    state: "Bihar"
  }
}
console.log("Original Object = ", originalObject)

let copiedObject = (cloneAndUpdateCity(originalObject))
console.log("Copied Object = ", copiedObject)
