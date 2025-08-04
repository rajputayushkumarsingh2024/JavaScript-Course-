/*
### **Q6. Loop Through Nested Object**

🧠 *Task:*
Given a nested object, use `for...in` to loop through each key, and if the value is an object, **loop through its keys too**.

📌 *Example:*

```js
let student = {
  name: "Ayush",
  marks: {
    math: 90,
    english: 85
  }
}
```

📌 *Expected Output:*

name: Ayush  
math: 90  
english: 85

*/

let student = {
  name: "Ayush",
  marks: {
    math: 90,
    english: 85
  }
}

for (let key in student) {

  if (Object.prototype.toString.call(student[key]).slice(8, -1) === "Object") {
    for (let innerKey in student[key]) {
      console.log(`${innerKey} : ${student[key][innerKey]}`)
    }
  }
  else {
    console.log(`${key} : ${student[key]}`)
  }
}