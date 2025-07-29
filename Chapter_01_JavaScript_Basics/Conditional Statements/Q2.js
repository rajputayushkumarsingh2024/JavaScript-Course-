/*

#### ✅ **Q2. Even or Odd**

Write a program that takes an integer and checks whether the number is **even** or **odd**.

📥 **Input Example:**  7
📤 **Output Example:**  Odd

*/

// SOLUTION

let finder = (num) => {
  if(num%2==0){
    console.log("even")
  }
  else{
    console.log("odd")
  }
}

finder(7)
finder(72554118)