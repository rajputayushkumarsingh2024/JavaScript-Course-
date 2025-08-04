/*
### **Q3. Count Properties in an Object**

🧠 *Task:*
Write a function `countProperties(obj)` that takes an object and returns how many properties it has using a `for...in` loop.

📌 *Example:*  countProperties({name: "Ayush", age: 19, city: "Patna"}) ➞ 3

*/

let countProperties = (obj) => {
  let count = 0;
  for(let key in obj){
    count++
  }
  console.log(count)
}

countProperties({name: "Ayush", age: 20, city: "Patna"})