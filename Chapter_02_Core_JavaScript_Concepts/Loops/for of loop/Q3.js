/*
### **Q3. Sum of All Prices in an Array**

🧠 **Task:**
Use a `for...of` loop to calculate the total price of all items.

```js
let prices = [100, 250, 75, 80];
```

**Expected Output:**  Total = 505

*/

let prices = [100, 250, 75, 80];

let sum = 0;
for(let price of prices){
  sum = sum + price;
}
console.log("Total = " + sum)
