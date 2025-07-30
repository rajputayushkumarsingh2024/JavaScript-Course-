/*

### 🟢 Q1. Identify the Data Type

Write a function that takes a value as input and prints the **type of the value** using `typeof`.

📥 Example Input: `"Ayush"`, `19`, `true`, `null`
📤 Example Output:

```
string  
number  
boolean  
object
```

*/

// SOLUTION 

let data = (input) => {
  console.log(typeof input)
}

data("Ayush")
data(19)
data(true)
data(null)
