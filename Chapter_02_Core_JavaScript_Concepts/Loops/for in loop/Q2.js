/*
### **Q2. Print Array Indexes and Values**

🧠 *Task:*
Create an array called `colors` with a few color names.
Use a `for...in` loop to print index and corresponding color.

📌 *Expected Output:*

0: Red  
1: Green  
2: Blue

*/

let colors = ["Red", "Green", "Blue"];

for(let index in colors){
  console.log(`${index} : ${colors[index]}`)
}

