/*
### **Q3. Print All Elements of an Array**

**Task:**
Create an array of any 4 fruits. Use a `do-while` loop to print each fruit.

**Expected Output:**

```
Apple  
Orange  
Grapes  
Mango
```
*/

let fruits = ["Apple",  "Orange",  "Grapes",  "Mango"]

let i = 0;

do{
  console.log(fruits[i])
  i++
}
while(i<fruits.length)