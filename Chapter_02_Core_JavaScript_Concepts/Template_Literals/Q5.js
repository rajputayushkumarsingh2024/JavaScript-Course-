/*

### ✅ **Practice Question: Welcome Email Generator**
🧠 **Task:**
Create a function called `generateEmail` that takes three arguments:

* `name` (string)
* `course` (string)
* `date` (string)

The function should return a welcome message like this:
**"Hello Ayush, your course 'JavaScript Mastery' starts on 5th August. Best of luck!"**

### 🔁 **Example:**

generateEmail("Ayush", "JavaScript Mastery", "5th August");
🟢 **Output:**  "Hello Ayush, your course 'JavaScript Mastery' starts on 5th August. Best of luck!"

*/

let generateEmail = (name, course, date) => {
  return `Hello ${name}, your course '${course}' starts on ${date}. Best of luck!`;
};

console.log(generateEmail("Ayush", "JavaScript Mastery", "5th August"));
