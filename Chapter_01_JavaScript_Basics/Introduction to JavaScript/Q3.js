/*

## ✅ **2 Medium Coding Questions**

### **3. Age Categorizer**

**Difficulty**: Medium
**Topic**: if-else, Variables, Logical Operators

🧠 *Task*: Write a program that takes an age as a variable and prints:

* "Child" if age < 13
* "Teen" if age >= 13 and < 20
* "Adult" if age >= 20 and < 60
* "Senior" if age >= 60

👉 Use only `if...else if...else`.

```js
let age = 25; // Try changing this value
// Expected Output: Adult
```

*/

// SOLUTION
let age = 25;
if(age < 13){
  console.log("Child")
}
else if (age >= 13 && age < 20){
  console.log("Teens")
}
else if (age >= 20 && age < 60){
  console.log("Adult")
}
else{
  console.log("Senior")
}