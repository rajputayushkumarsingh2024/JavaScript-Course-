/*
### **Q6. Filter Out Only Numbers from a Mixed Array**

🧠 **Task:**
Use `for...of` to loop through a mixed array and **push only numbers** into a new array.

```js
let mixed = [101, "Ayush", true, 33, "code", 77];
```

**Expected Output:**    [101, 33, 77]

*/

let mixed = [101, "Ayush", true, 33, "code", 77];

let arr = [];

for(let index of mixed){
  if(typeof index === "number"){
    arr.push(index)
  }
}

console.log(arr)