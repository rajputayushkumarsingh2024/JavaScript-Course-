/*
/*
### 🔸 Q4. Add Elements to Middle

**Task:**
Insert an element `"🍕"` into the end of an array using spread operator.

```js
let food = ["🍎", "🍌", "🍇"];
// Expected: ["🍎", "🍌", "🍇", "🍕"]
```

---

*/

let food = ["🍎", "🍌", "🍇"];

let finalListofFood = [...food]
finalListofFood.push("🍕")
console.log(finalListofFood)
