/*
### 🟡 **Medium Level**

#### **Q3. Sum of Digits**

**🧠 Task:**
Write a `while` loop that takes a number `12345` and prints the **sum of its digits**.

**✅ Output: 15

*/

let i = 0
let num = 12345
let number = num.toString().split('').map(Number)
let sum = 0

// console.log(num.toString())
// console.log(typeof num)
// console.log(typeof num.toString())
// console.log(num.toString().split(''))
// console.log(num.toString().split('').map(Number))


while(i < number.length){
  sum = sum + number[i]
  i++
}
console.log(sum)