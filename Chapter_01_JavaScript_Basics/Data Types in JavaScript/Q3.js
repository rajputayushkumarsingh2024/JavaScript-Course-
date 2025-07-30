/*

### 🟡 Q3. Working with an Object

Create an object called `student` with properties: `name`, `age`, and `isStudent`. Print each property using both **dot notation** and **bracket notation**.

📤 Example Output:

```
Ayush  
19  
true  
Ayush  
19  
true

*/

// SOLUTION

let student = {
  name: "Ayush",
  age: 19,
  isStudent: true,
};

// using dot notation
console.log(student.name);       
console.log(student.age);         
console.log(student.isStudent);   

// using bracket notation
console.log(student["name"]);     
console.log(student["age"]);     
console.log(student["isStudent"]); 

