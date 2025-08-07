/*
### 🔹 **Q1. Clone and Modify an Object**

**🧠 Task:**
Write a function `cloneAndChangeName` that:

1. Takes an object with `name` and `age` properties.
2. Creates a **shallow copy** using `Object.assign()`.
3. Changes the `name` in the copied object to `"Shalu"`.
4. Returns the copied object.

**📦 Example:**

```js
cloneAndChangeName({ name: "Ayush", age: 19 });
```

**✅ Expected Output:**  { name: "Shalu", age: 19 }
---
⚠️ The **original object must not change**.
---
*/

let cloneAndChangeName = (obj) => {
  let copiedObj = Object.assign({}, obj)
  copiedObj.name = "Shalu"
  console.log(copiedObj)
}

cloneAndChangeName({ name: "Ayush", age: 19 });

