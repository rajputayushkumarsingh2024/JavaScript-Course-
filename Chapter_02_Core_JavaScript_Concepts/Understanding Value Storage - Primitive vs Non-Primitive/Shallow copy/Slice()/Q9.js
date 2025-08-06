/*

### ✅ Q9. 🧪 **Detect Shared References using `slice()`**

**Task:**
You are given an array of objects. Each object contains a nested object (`detail`). Your goal is to:

1. Use `slice()` to create a **shallow copy** of the array.
2. Modify a **nested value** (like `price`) in the copied array.
3. Use **code** (not comments!) to:

   * Check if the change affects the original array.
   * Check if the nested object reference is shared using `===`.

---

### 🧾 Example:

```js
const items = [
  { id: 1, detail: { price: 10 } },
  { id: 2, detail: { price: 20 } }
];

// Your code starts here...
```
*/

const items = [
  { id: 1, detail: { price: 10 } },
  { id: 2, detail: { price: 20 } }
];
console.log("Original Array = ", items)

let copiedItems = items.slice()
copiedItems[0].detail.price = 50 
copiedItems[1].detail.price = 100
console.log("Copied Array = ", copiedItems)



let firstItem = items[0].detail.price
let secondItem  = items[1].detail.price

if(firstItem == 50 && secondItem == 100){
  console.log("✅ Original array was affected — shared references exist.")
}
else{
  console.log("❌ Original array was NOT affected — no shared reference.")
}

if (items[0].detail === copiedItems[0].detail) {
  console.log("✅ 'detail' object at index 0 is shared.");
} else {
  console.log("❌ 'detail' object at index 0 is not shared.");
}

if (items[1].detail === copiedItems[1].detail) {
  console.log("✅ 'detail' object at index 1 is shared.");
} else {
  console.log("❌ 'detail' object at index 1 is not shared.");
}
