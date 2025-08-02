/*

#### **Q4. Reverse a Number**

**🧠 Task:**
Use a `while` loop to reverse a given number `4567` and print it.

**✅ Output:**  7654

*/


let num = 4567;
let number = num.toString().split('');
let i = number.length - 1;
let reverseNum = "";

while (i >= 0) {
  reverseNum += number[i];
  i--;
}

console.log(Number(reverseNum)); // ✅ Output: 7654
