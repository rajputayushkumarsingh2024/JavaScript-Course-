/* 

## ✅ **2 Hard Coding Questions**

### **5. Custom `typeof` Simulator**

**Difficulty**: Hard
**Topic**: Control Statements, typeof, Logic

🧠 *Task*: Write a function `checkType(value)` that prints:

* "String" if the type is string
* "Number" if the type is number
* "Boolean" if boolean
* "Array" if it's an array
* "Object" if it's a regular object
* "Undefined" or "Null" accordingly

```js
// Example Usage:
checkType([1,2,3]);     // Array
checkType({a: 1});      // Object
checkType(null);        // Null
checkType("Ayush");     // String
```

*/

// SOLUTION

let checkType = (value) => {
  if(typeof value === "string"){
    console.log("String")
  }
  else if(typeof value === "number"){
    console.log("Number")
  }
  else if(typeof value === "boolean"){
    console.log("Boolean")
  }
  else if(Array.isArray(value)){
    console.log("Array")
  }
  else if(value === null){
    console.log("Null")
  }
  else if(typeof value === "object"){
    console.log("Object")
  }
  else{
    console.log("Undefined")
  }
}

checkType("Ayush")
checkType(5); 
checkType(true)
checkType([1,2,3]); 
checkType({a: 1}); 
checkType(null); 
checkType() 