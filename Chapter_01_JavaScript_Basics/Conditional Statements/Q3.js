/*


#### ✅ **Q3. Largest of Three Numbers**

Write a program that takes **three integers** as input and prints the **largest** number.

📥 **Input Example:**  12 45 32
📤 **Output Example:**  45 is the largest

*/

// SOLUTION

let finder = (num) => {
  let digit = num.split(" ").map(Number)
  // console.log(digit)
  let max = digit[0]
  for(let i=0; i<digit.length; i++){
    if(max < digit[i]){
      max = digit[i]
    }
  }
  console.log(`largest number = ${max}`)
}

finder("12 45 32")
finder("12 45 32 52 123 54654 22")
finder("12 -5 -1")

