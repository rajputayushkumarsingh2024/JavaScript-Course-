/*

### 🔴 Q5. BigInt & Symbol Comparison

Create two different `Symbol` values with the same description. Also, declare a `BigInt` and try to perform addition with a normal number (and explain the error if any).

📤 Example Output:

```
Symbol(id) !== Symbol(id) // true  
TypeError: Cannot mix BigInt and other types
```

*/

// SOLUTION 

let id = Symbol(2025)
let year = Symbol(2025)

console.log(Symbol(2025) !== Symbol(2025))

let num = 10
let bigNumber = 50n

console.log(BigInt(num) + bigNumber)

try {
  console.log(num + bigNumber); // ❌ This will throw TypeError
} catch (error) {
  console.log("Not possible"); // Log the error message
}

