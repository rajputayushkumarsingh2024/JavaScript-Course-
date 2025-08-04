/*

#### **Q4. Reverse a Number**

**🧠 Task:**
Use a `while` loop to reverse a given number `4567` and print it.

**✅ Output:**  7654

*/

let num = 4567;
let str = num.toString()

// console.log(num.toString())
// console.log(typeof num.toString())

let i = str.length-1;
let nStr = ""
while(i>=0){
  nStr += str[i]
  i--
}
console.log(nStr)

