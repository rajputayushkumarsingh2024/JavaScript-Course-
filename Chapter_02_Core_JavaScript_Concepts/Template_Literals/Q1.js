/*

### **1. Personalized Greeting Message**

🧠 **Task:**
Write a function that takes a name and age, and returns a message like:
👉 *"Hello, my name is Ayush and I am 20 years old."*

*/

// SOLUTION 

let greet = (name, age) => {
  return `Hello, my name is ${name} and I am ${age} years old.`
}

console.log(greet("Ayush", 20))