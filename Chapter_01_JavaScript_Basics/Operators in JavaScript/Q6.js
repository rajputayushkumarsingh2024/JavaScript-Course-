/*

### ✅ 6. **Unary Operators**

**Q:** Write a program that demonstrates:

* Post-increment
* Pre-increment
* Post-decrement
* Pre-decrement

📥 Input: `let a = 5`
📤 Output:

```
Post-Increment: 5
After Post-Increment: 6
Pre-Increment: 7
Post-Decrement: 7
After Post-Decrement: 6
Pre-Decrement: 5
```

*/

// SOLUTION 

let a = 5;
console.log(`Post-Increment: ${a++}`)
console.log(`After Post-Increment: ${a}`)

console.log(`Pre-Increment: ${++a}`)
console.log(`Post-Decrement: ${a--}`)

console.log(`After Post-Decrement: ${a}`)
console.log(`Pre-Decrement: ${--a}`)
