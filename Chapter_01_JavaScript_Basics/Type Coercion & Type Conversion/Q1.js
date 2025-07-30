/*


### 🔹 Easy Q1: Explicit String Conversion

**Q:**
Write a function `convertToString(val)` that takes any value and returns its type before and after converting it to a string using `String()`.

**Example Input:** convertToString(123)

**Expected Output:**
Original type: number  
Converted value: "123"  
Converted type: string
```

🧠 You should use `typeof` and `String()`.

*/

// SOLUTION

let convertToString = (val) => {
  console.log(`Original type: ${typeof val}`)
  let converted = String(val);
  console.log(`Converted value: "${converted}"`);
  console.log(`Converted type: ${typeof converted}`);
}

convertToString(123)