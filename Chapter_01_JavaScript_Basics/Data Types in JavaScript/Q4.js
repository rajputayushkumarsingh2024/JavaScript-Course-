/*

### 🟡 Q4. Manipulate an Array

Create an array of your 3 favorite programming languages. Print the **first** and **last** items in the array. Then, add a new language to the array and print the updated array.

📥 Example Input: `["JavaScript", "Python", "C++"]`
📤 Example Output:

```
JavaScript  
C++  
["JavaScript", "Python", "C++", "Rust"]
```
*/

// SOLUTION 

let arr = ["JavaScript", "Python", "C++"]
console.log(arr[0])
console.log(arr[arr.length-1])
arr.push("Rust")
console.log(arr)