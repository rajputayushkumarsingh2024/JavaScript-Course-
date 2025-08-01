/*
### 🟡 **Medium Level**

#### **Q6. Sum of Digits**

**🧠 Task:**
Write a `for` loop that takes a number `12345` and prints the **sum of its digits**.

**✅ Output: 15

*/


let num = 12345
let number = num.toString().split('').map(Number)

let sum = 0
for(let i=1; i<=number.length; i++){
  sum += i
}
console.log(sum)