/*
### 🔸 Q9. Add a New Key to an Existing Object

**Task:**
Add a new key (`"city": "Patna"`) to the object using spread operator (don’t modify the original object).

```js
let user = { name: "Ayush", age: 19 };
// Expected: { name: "Ayush", age: 19, city: "Patna" }

*/

let user = { name: "Ayush", age: 19 };
console.log(user)

let clonedArr = {...user}
clonedArr.city = "Patna"
console.log(clonedArr)