/*

### **4. Sum of Multiples of 3 or 5 (Below 100)**

**Difficulty**: Medium
**Topic**: Loops, Arithmetic Operators

🧠 *Task*: Write a program that finds the **sum** of all numbers between 0 and 100 that are divisible by 3 or 5.

```js
// Expected Output: 2418
```

*/

// SOLUTION

let sum = 0
for(let i = 0; i <= 100; i++){
  if(i % 3 == 0 || i % 5 == 0){
    sum = sum + i
  }
}
console.log(sum)