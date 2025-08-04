/*

#### **Q6. Print Fibonacci Series up to N terms**

**🧠 Task:**
Use a `while` loop to print the first `10` numbers of the Fibonacci series.

**✅ Output:**  0 1 1 2 3 5 8 13 21 34

*/

let a = 0;
let b = 1;

let count = 0;

while(count < 10){
  // console.log(a) 
  process.stdout.write(a + " ");
  let nextNum = a + b;
  // console.log(nextNum)
  a = b;
  b = nextNum;
  count++
}


// process.stdout.write(a + " "); => way to write in <-----------> way 