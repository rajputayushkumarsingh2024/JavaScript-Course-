/*

### **6. Multiplication Table Generator**

**Difficulty**: Hard
**Topic**: Loops, Functions, Template Literals

🧠 *Task*: Write a function `printTable(n)` that prints the multiplication table of number `n` up to 10.

```js
// Example:
printTable(5);
// Expected Output:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50
```

*/

// SOLUTION

let printTable = (n) => {
  for(let i=1; i<=10; i++){
    console.log(`${n} X ${i} = ${n*i}`)
  }
}
printTable(5)