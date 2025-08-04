/*
### **Q5. Sum of First `n` Natural Numbers**

**Task:**
Ask the user for a number `n`.
Use a `do-while` loop to calculate and print the **sum** of numbers from `1` to `n`.

**Example Input:**
`n = 5`

**Expected Output:**  Sum = 15

*/

let i = 1;
let sum = 0;
let n = 5;

do {
  sum = sum + i
  i++
}
while (i <= n)
console.log(`Sum = ${sum}`)