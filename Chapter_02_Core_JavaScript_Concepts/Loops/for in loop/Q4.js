/*
### **Q4. Uppercase Object Keys**

🧠 *Task:*
Create an object with some properties.
Use a `for...in` loop to print **keys in uppercase** along with their values.

📌 *Example:*

```
NAME: John  
AGE: 30  
CITY: Ranchi
```

*/

let biodata = {
  Name : "John",
  AGE : 30,
  CITY : "Ranchi"
}

for(let key in biodata){
  console.log(`${key.toUpperCase()} : ${biodata[key]}`)
}