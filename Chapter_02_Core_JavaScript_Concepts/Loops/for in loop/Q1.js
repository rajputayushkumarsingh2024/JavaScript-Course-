/*

### **Q1. Print Object Properties**

🧠 *Task:*
Create an object called `book` with properties like `title`, `author`, and `year`.
Use a `for...in` loop to print each property and its value.

📌 *Expected Output:*

title: The Alchemist  
author: Paulo Coelho  
year: 1988

*/

let book = {
  title : "The Alchemist",
  author : "Paulo Coelho",
  year : 1988
}

// console.log(book)

for(let key in book){
  console.log(`${key} : ${book[key]}`)
}