/*

✅ Q1. Positive, Negative or Zero
Write a program that takes an integer as input and prints whether it is positive, negative, or zero.

📥 Input Example: -10
📤 Output Example: Negative

*/

// SOLUTION

let finder = (num) => {
  if(num > 0){
    console.log("Positive")
  }
  else if(num < 0){
    console.log("Negative")
  }
  else{
    console.log("Zero")
  }
}

finder(-10)
finder(24)
finder(0)