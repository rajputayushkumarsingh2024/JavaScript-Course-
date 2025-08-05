/*
### 🔸 Q8. Merge with Property Overwrite

**Task:**
Merge two objects using spread operator. The second object should overwrite a property from the first.

```js
let base = { name: "Ayush", role: "Student" };
let update = { role: "Developer" };
// Expected: { name: "Ayush", role: "Developer" }
```

*/

let base = { name: "Ayush", role: "Student" };
let update = { role: "Developer" };

console.log({...base, ...update})